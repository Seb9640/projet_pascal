package com.pascal.backskeleton;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("com.pascal.backskeleton.controllers")
public class BackSkeletonApplication {
    public static void main(String[] args) {
        SpringApplication.run(BackSkeletonApplication.class, args);
    }
}
