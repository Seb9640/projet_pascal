package com.pascal.backskeleton.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

import com.pascal.backskeleton.DAO.MovieRepository;
import com.pascal.backskeleton.DAO.PlaceRepository;
import com.pascal.backskeleton.DAO.ReviewRepository;
import com.pascal.backskeleton.models.Movie;
import com.pascal.backskeleton.models.Place;
import com.pascal.backskeleton.models.Review;

@RestController
@RequestMapping("/api/reviews")
public class ReviewController {

    @Autowired
    private ReviewRepository reviewRepository;

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
                        // Si l'entité est un film, utilisez entity_id pour récupérer les détails du
                        // film
                        Movie movie = movieRepository.findById(entityId).orElse(null);
                        // Vérifiez si le film existe avant de filtrer l'avis
                        if (movie != null) {
                            review.setEntity(movie);
                            return true;
                        }
                    } else if ("place".equals(review.getEntityType())) {
                        // Si l'entité est un lieu, utilisez entity_id pour récupérer les détails du
                        // lieu
                        Place place = placeRepository.findById(entityId).orElse(null);
                        // Vérifiez si le lieu existe avant de filtrer l'avis
                        if (place != null) {
                            review.setEntity(place);
                            return true;
                        }
                    }
                    return false;
                })
                .collect(Collectors.toList());

        return new ResponseEntity<>(reviews, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Review> getReviewById(@PathVariable Long id) {
        Optional<Review> optionalReview = reviewRepository.findById(id);
        return optionalReview.map(review -> new ResponseEntity<>(review, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
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
    public ResponseEntity<Review> createReview(@RequestBody Review review) {
        Review createdReview = reviewRepository.save(review);
        return new ResponseEntity<>(createdReview, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Review> updateReview(@PathVariable Long id, @RequestBody Review review) {
        Optional<Review> optionalReview = reviewRepository.findById(id);
        if (optionalReview.isPresent()) {
            Review existingReview = optionalReview.get();
            existingReview.setRating(review.getRating());
            existingReview.setFullName(review.getFullName());
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
