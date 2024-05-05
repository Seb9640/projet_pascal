package com.pascal.backskeleton.DAO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pascal.backskeleton.models.Review;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
    
}