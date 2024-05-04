package com.pascal.backskeleton.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;
import com.pascal.backskeleton.exception.ResourceNotFoundException;

import java.util.List;

import com.pascal.backskeleton.DAO.UserRepository;
import com.pascal.backskeleton.models.User;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;


  
    // // Create
    // @PostMapping
    // public ResponseEntity<User> addUser(@RequestBody User user) {
    //     User savedUser = userRepository.save(user);
    //     return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    // }

    // // Read
    // @GetMapping("/{id}")
    // public ResponseEntity<User> getUserById(@PathVariable Long id) {
    //     User user = userRepository.findById(id)
    //             .orElseThrow(() -> new ResourceNotFoundException("User not found with id " + id));
    //     return new ResponseEntity<>(user, HttpStatus.OK);
    // }

    // @GetMapping
    // public ResponseEntity<List<User>> getAllUsers() {
    //     List<User> users = userRepository.findAll();
    //     return new ResponseEntity<>(users, HttpStatus.OK);
    // }

    // // Update
    // @PutMapping("/{id}")
    // public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userDetails) {
    //     User user = userRepository.findById(id)
    //             .orElseThrow(() -> new ResourceNotFoundException("User not found with id " + id));

    //     // Update user details
    //     user.setFirstName(userDetails.getFirstName());
    //     user.setLastName(userDetails.getLastName());
    //     user.setBirthdate(userDetails.getBirthdate());
    //     // Update other fields as needed

    //     User updatedUser = userRepository.save(user);
    //     return new ResponseEntity<>(updatedUser, HttpStatus.OK);
    // }

    // // Delete
    // @DeleteMapping("/{id}")
    // public ResponseEntity<?> deleteUser(@PathVariable Long id) {
    //     User user = userRepository.findById(id)
    //             .orElseThrow(() -> new ResourceNotFoundException("User not found with id " + id));

    //     userRepository.delete(user);
    //     return ResponseEntity.ok().build();
    // }
}
