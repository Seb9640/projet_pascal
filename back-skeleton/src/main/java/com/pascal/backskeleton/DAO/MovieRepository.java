package com.pascal.backskeleton.DAO;
import org.springframework.data.jpa.repository.JpaRepository;

import com.pascal.backskeleton.models.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {
}

