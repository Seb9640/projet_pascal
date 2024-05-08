package com.pascal.backskeleton.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pascal.backskeleton.dao.PlaceRepository;
import com.pascal.backskeleton.models.Place;


@RestController
@RequestMapping("/api/places")
public class PlaceController {

    @Autowired
    private PlaceRepository placeRepository;

    // Endpoint pour récupérer toutes les places
    @GetMapping
    public ResponseEntity<List<Place>> getAllPlaces() {
        List<Place> places = placeRepository.findAll();
        return new ResponseEntity<>(places, HttpStatus.OK);
    }

    // Endpoint pour récupérer une place par son ID
    @GetMapping("/{id}")
    public ResponseEntity<Place> getPlaceById(@PathVariable("id") Long id) {
        Optional<Place> place = placeRepository.findById(id);
        return place.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // Endpoint pour créer une nouvelle place
    @PostMapping
    public ResponseEntity<Place> createPlace(@RequestBody Place place) {
        Place savedPlace = placeRepository.save(place);
        return new ResponseEntity<>(savedPlace, HttpStatus.CREATED);
    }

    // Endpoint pour mettre à jour une place existante
    @PutMapping("/{id}")
    public ResponseEntity<Place> updatePlace(@PathVariable("id") Long id, @RequestBody Place place) {
        Optional<Place> optionalPlace = placeRepository.findById(id);
        if (optionalPlace.isPresent()) {
            Place existingPlace = optionalPlace.get();
            existingPlace.setTitle(place.getTitle());
            existingPlace.setAddress(place.getAddress());
            existingPlace.setImageUrl(place.getImageUrl());
            existingPlace.setOpeningHours(place.getOpeningHours());
            existingPlace.setCreatedAt(place.getCreatedAt());

            Place updatedPlace = placeRepository.save(existingPlace);
            return new ResponseEntity<>(updatedPlace, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Endpoint pour supprimer une place
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deletePlace(@PathVariable("id") Long id) {
        try {
            placeRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
