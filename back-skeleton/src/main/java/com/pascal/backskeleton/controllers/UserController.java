package com.pascal.backskeleton.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.pascal.backskeleton.models.User;
import com.pascal.backskeleton.services.FileStorageService;

import java.io.IOException;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import com.pascal.backskeleton.DAO.UserRepository;

import jakarta.transaction.Transactional;

import static org.springframework.http.MediaType.MULTIPART_FORM_DATA_VALUE;
import org.springframework.http.MediaType;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    
    private FileStorageService fileStorageService;

    // Endpoint pour récupérer tous les utilisateurs
    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userRepository.findAll();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    // Endpoint pour récupérer un utilisateur par son ID
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") Long id) {
        Optional<User> user = userRepository.findById(id);
        return user.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // Endpoint pour créer un nouvel utilisateur
    @PostMapping(consumes = {MediaType.MULTIPART_FORM_DATA_VALUE, MediaType.APPLICATION_OCTET_STREAM_VALUE})
    public ResponseEntity<User> createUser(@RequestPart("user") User user,
            @RequestPart(value = "image", required = false) MultipartFile image) {
        user.setCreatedAt(new Timestamp(System.currentTimeMillis()));

        // Si un fichier est fourni, associez-le à l'utilisateur
        if (image != null && !image.isEmpty()) {
            try {
                // Sauvegardez le fichier et récupérez son URL
                String fileUrl = fileStorageService.storeFile(image);
                // Associez l'URL du fichier à l'utilisateur
                user.setImage(fileUrl);
            } catch (IOException e) {
                e.printStackTrace();
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
            }
        }

        User savedUser = userRepository.save(user);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }

    // Endpoint pour mettre à jour un utilisateur existant
    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable("id") Long id, @RequestBody User user) {
        Optional<User> optionalUser = userRepository.findById(id);
        if (optionalUser.isPresent()) {
            User existingUser = optionalUser.get();
            existingUser.setFirstName(user.getFirstName());
            existingUser.setLastName(user.getLastName());
            existingUser.setBirthdate(user.getBirthdate());
            existingUser.setUsername(user.getUsername());
            existingUser.setEmail(user.getEmail());
            existingUser.setPassword(user.getPassword());
            existingUser.setImage(user.getImage());
            existingUser.setUpdatedAt(user.getUpdatedAt());

            User updatedUser = userRepository.save(existingUser);
            return new ResponseEntity<>(updatedUser, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Endpoint pour supprimer un utilisateur
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteUser(@PathVariable("id") Long id) {
        try {
            userRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
