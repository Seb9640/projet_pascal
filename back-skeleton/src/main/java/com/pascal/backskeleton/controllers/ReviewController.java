package com.pascal.backskeleton.controllers;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.pascal.backskeleton.dao.MovieRepository;
import com.pascal.backskeleton.dao.PlaceRepository;
import com.pascal.backskeleton.dao.ReviewRepository;
import com.pascal.backskeleton.dao.UserRepository;
import com.pascal.backskeleton.models.Movie;
import com.pascal.backskeleton.models.Place;
import com.pascal.backskeleton.models.Review;
import com.pascal.backskeleton.models.User;

@RestController
@RequestMapping("/api/reviews")
public class ReviewController {

    @Autowired
    private ReviewRepository reviewRepository;
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private PlaceRepository placeRepository;

    @Autowired
    public ReviewController(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    @GetMapping
    public ResponseEntity<List<Review>> getAllReviews() {
        List<Review> reviews = reviewRepository.findAll();
    
        // Filtrer les avis en fonction de la valeur de entityType
        List<Review> filteredReviews = reviews.stream()
                .filter(review -> {
                    Long entityId = review.getEntityId();
                    if ("movie".equals(review.getEntityType())) {
                        // Si l'entité est un film, utilisez entity_id pour récupérer les détails du film
                        Movie movie = movieRepository.findById(entityId).orElse(null);
                        // Vérifiez si le film existe avant de filtrer l'avis
                        if (movie != null) {
                            review.setEntity(movie);
                            return true;
                        }
                    } else if ("place".equals(review.getEntityType())) {
                        // Si l'entité est un lieu, utilisez entity_id pour récupérer les détails du lieu
                        Place place = placeRepository.findById(entityId).orElse(null);
                        // Vérifiez si le lieu existe avant de filtrer l'avis
                        if (place != null) {
                            review.setEntity(place);
                            return true;
                        }
                    }
                    return false;
                })
                .sorted(Comparator.comparing(Review::getId).reversed()) // Tri par ID décroissant
                .collect(Collectors.toList());
    
        return new ResponseEntity<>(filteredReviews, HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Review> getReviewById(@PathVariable Long id) {
        Optional<Review> optionalReview = reviewRepository.findById(id);
        return optionalReview.map(review -> new ResponseEntity<>(review, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/statistics")
    public ResponseEntity<Map<Integer, Long>> getReviewStatistics() {
        // Initialisez la carte avec des valeurs par défaut de 0 pour chaque note de 1 à
        // 5
        Map<Integer, Long> reviewStatistics = new HashMap<>();
        for (int i = 1; i <= 5; i++) {
            reviewStatistics.put(i, 0L);
        }

        // Exécutez une requête personnalisée pour récupérer les statistiques sur les
        // avis
        List<Object[]> statistics = reviewRepository.findReviewStatistics();

        // Parcourez les résultats de la requête et mettez à jour les statistiques dans
        // la carte
        for (Object[] row : statistics) {
            Integer rating = (Integer) row[0];
            Long count = (Long) row[1];
            reviewStatistics.put(rating, count);
        }

        return ResponseEntity.ok(reviewStatistics);
    }

    @GetMapping("/by/entity/{entityType}/{entityId}")
    public ResponseEntity<Map<String, Object>> getReviewsByEntityTypeAndEntityId(@PathVariable String entityType,
            @PathVariable Long entityId) {
        List<Review> reviews = reviewRepository.findByEntityTypeAndEntityId(entityType, entityId);
        Map<String, Object> response = new HashMap<>();

        response.put("entityType", entityType);
        response.put("entityId", entityId);

        if (!reviews.isEmpty()) {
            int dataCount = reviews.size();
            double averageRating = reviews.stream().mapToInt(Review::getRating).average().orElse(0);
            response.put("isSuccess", true);
            response.put("dataCount", dataCount);
            response.put("datas", reviews);
            response.put("avg", averageRating);
        } else {
            response.put("isSuccess", false);
            response.put("dataCount", 0);
            response.put("datas", Collections.emptyList());
            response.put("avg", 0);
        }
        response.put("requestDateTime", LocalDateTime.now());
        return ResponseEntity.ok(response);

    }

    @PostMapping
    public ResponseEntity<Review> createReview(@RequestBody Map<String, Object> requestBody) {
        if (requestBody != null && requestBody.containsKey("review")) {
            ObjectMapper objectMapper = new ObjectMapper(); // Créez un objet ObjectMapper pour la conversion
            System.out.println(requestBody.get("review"));
            Map<String, Object> reviewMap = (Map<String, Object>) requestBody.get("review");
            try {
                // Convertissez l'objet JSON de l'avis en un objet de type Review en utilisant
                // ObjectMapper
                Review reviewObject = objectMapper.convertValue(reviewMap, Review.class);
                // Maintenant, vous avez un objet Review que vous pouvez utiliser
                System.out.println(reviewObject);
                String email = (String) reviewMap.get("email"); // Cast de l'email en String
                String fullName = (String) reviewMap.get("full_name"); // Récupération du nom complet
                String[] nameParts = fullName.split(" "); // Découpe du nom complet en prénom et nom de famille
                String firstName = nameParts[0]; // Premier élément du tableau est le prénom
                String lastName = nameParts.length > 1 ? nameParts[1] : ""; // Deuxième élément du tableau est le nom de
                                                                            // famille, s'il existe

                // Récupérer l'utilisateur s'il existe ou créer un nouvel utilisateur
                User user = userRepository.findByEmail(email)
                        .orElseGet(() -> {
                            User newUser = new User();
                            newUser.setEmail(email);
                            newUser.setFirstName(firstName);
                            newUser.setLastName(lastName);
                            newUser.setUsername(lastName);
                            newUser.setPassword("lastName");
                            return userRepository.save(newUser);
                        });

                reviewObject.setUser(user);
                Review createdReview = reviewRepository.save(reviewObject);
                return new ResponseEntity<>(createdReview, HttpStatus.CREATED);
            } catch (IllegalArgumentException e) {
                // La conversion a échoué
                e.printStackTrace();
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
        } else {
            // L'objet requestBody est null ou ne contient pas la clé "review"
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Review> updateReview(@PathVariable Long id, @RequestBody Review review) {
        Optional<Review> optionalReview = reviewRepository.findById(id);
        if (optionalReview.isPresent()) {
            Review existingReview = optionalReview.get();
            existingReview.setRating(review.getRating());
            existingReview.setFull_name(review.getFull_name());
            existingReview.setEmail(review.getEmail());
            existingReview.setSummary(review.getSummary());
            existingReview.setReview(review.getReview());
            existingReview.setImage(review.getImage());
            existingReview.setUpdatedAt(review.getUpdatedAt());
            existingReview.setCreatedAt(review.getCreatedAt());
            reviewRepository.save(existingReview);
            return new ResponseEntity<>(existingReview, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteReview(@PathVariable Long id) {
        reviewRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
