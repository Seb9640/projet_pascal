package com.pascal.backskeleton.DAO;
import org.springframework.data.jpa.repository.JpaRepository;

import com.pascal.backskeleton.models.Place;

public interface PlaceRepository extends JpaRepository<Place, Long> {
}
