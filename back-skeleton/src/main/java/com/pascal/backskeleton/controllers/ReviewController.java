package com.pascal.backskeleton.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import com.pascal.backskeleton.DAO.ReviewRepository;
import com.pascal.backskeleton.models.Review;

@RestController
@RequestMapping("/api/reviews")
public class ReviewController {

    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    public ReviewController(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    @GetMapping
    public ResponseEntity<List<Review>> getAllReviews() {
        List<Review> reviews = reviewRepository.findAll();
        return new ResponseEntity<>(reviews, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Review> getReviewById(@PathVariable Long id) {
        Optional<Review> optionalReview = reviewRepository.findById(id);
        return optionalReview.map(review -> new ResponseEntity<>(review, HttpStatus.OK))
                             .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
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
