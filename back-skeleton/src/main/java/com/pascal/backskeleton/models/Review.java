package com.pascal.backskeleton.models;
import java.sql.Timestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "reviews")
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "entity_id", nullable = false)
    private Long entityId;

    @Column(name = "entity_type", nullable = false)
    private String entityType;

    @Column(name = "rating", nullable = false)
    private int rating;

    @Column(name = "summary")
    private String summary;

    @Column(name = "review")
    private String review;

    @Column(name = "created_at", nullable = false, updatable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Timestamp createdAt;

    // Getters and setters

    public Review() {
    }

    public Review(Long id, User user, Long entityId, String entityType, int rating, String summary, String review, Timestamp createdAt) {
        this.id = id;
        this.user = user;
        this.entityId = entityId;
        this.entityType = entityType;
        this.rating = rating;
        this.summary = summary;
        this.review = review;
        this.createdAt = createdAt;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return this.user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Long getEntityId() {
        return this.entityId;
    }

    public void setEntityId(Long entityId) {
        this.entityId = entityId;
    }

    public String getEntityType() {
        return this.entityType;
    }

    public void setEntityType(String entityType) {
        this.entityType = entityType;
    }

    public int getRating() {
        return this.rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getSummary() {
        return this.summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public String getReview() {
        return this.review;
    }

    public void setReview(String review) {
        this.review = review;
    }

    public Timestamp getCreatedAt() {
        return this.createdAt;
    }

    public void setCreatedAt(Timestamp createdAt) {
        this.createdAt = createdAt;
    }

    public Review id(Long id) {
        setId(id);
        return this;
    }

    public Review user(User user) {
        setUser(user);
        return this;
    }

    public Review entityId(Long entityId) {
        setEntityId(entityId);
        return this;
    }

    public Review entityType(String entityType) {
        setEntityType(entityType);
        return this;
    }

    public Review rating(int rating) {
        setRating(rating);
        return this;
    }

    public Review summary(String summary) {
        setSummary(summary);
        return this;
    }

    public Review review(String review) {
        setReview(review);
        return this;
    }

    public Review createdAt(Timestamp createdAt) {
        setCreatedAt(createdAt);
        return this;
    }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", user='" + getUser() + "'" +
            ", entityId='" + getEntityId() + "'" +
            ", entityType='" + getEntityType() + "'" +
            ", rating='" + getRating() + "'" +
            ", summary='" + getSummary() + "'" +
            ", review='" + getReview() + "'" +
            ", createdAt='" + getCreatedAt() + "'" +
            "}";
    }
    
}
