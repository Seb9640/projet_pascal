package com.pascal.backskeleton.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import com.pascal.backskeleton.DAO.PlaceRepository;
import com.pascal.backskeleton.models.Place;

@RestController
@RequestMapping("/places")
public class PlaceController {

    @Autowired
    private PlaceRepository placeRepository;

    // Create
    @PostMapping
    public ResponseEntity<Place> addPlace(@RequestBody Place place) {
        Place savedPlace = placeRepository.save(place);
        return new ResponseEntity<>(savedPlace, HttpStatus.CREATED);
    }

    // Read
    @GetMapping("/{id}")
    public ResponseEntity<Place> getPlaceById(@PathVariable Long id) {
        Place place = placeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Place not found with id " + id));
        return new ResponseEntity<>(place, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Place>> getAllPlaces() {
        List<Place> places = placeRepository.findAll();
        return new ResponseEntity<>(places, HttpStatus.OK);
    }

    // Update
    @PutMapping("/{id}")
    public ResponseEntity<Place> updatePlace(@PathVariable Long id, @RequestBody Place placeDetails) {
        Place place = placeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Place not found with id " + id));

        place.setTitle(placeDetails.getTitle());
        place.setAddress(placeDetails.getAddress());
        place.setOpeningHours(placeDetails.getOpeningHours());
        // You can add more fields to update as needed

        Place updatedPlace = placeRepository.save(place);
        return new ResponseEntity<>(updatedPlace, HttpStatus.OK);
    }

    // Delete
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletePlace(@PathVariable Long id) {
        Place place = placeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Place not found with id " + id));

        placeRepository.delete(place);
        return ResponseEntity.ok().build();
    }
}
