package com.pascal.backskeleton.services;


import org.springframework.stereotype.Service;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.web.multipart.MultipartFile;

@Service
public class FileStorageService {

    private final String uploadDir = "/src/main/resources/static/images";

    public String storeFile(MultipartFile file) throws IOException {
        String fileName = file.getOriginalFilename();
        Path filePath = Paths.get(uploadDir + fileName);
        Files.copy(file.getInputStream(), filePath);
        return fileName;
    }

    public String updateFile(String fileName, MultipartFile file) throws IOException {
        // Supprimez l'ancien fichier
        deleteFile(fileName);
        // Enregistrez le nouveau fichier
        return storeFile(file);
    }


    public void deleteFile(String fileName) throws IOException {
        Path filePath = Paths.get(uploadDir + "/" + fileName);
        Files.deleteIfExists(filePath);
    }
}
