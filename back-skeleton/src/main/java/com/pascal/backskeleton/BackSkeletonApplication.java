package com.pascal.backskeleton;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@ComponentScan("com.pascal.backskeleton.webconfig")
@ComponentScan("com.pascal.backskeleton.controllers")
@ComponentScan("com.pascal.backskeleton.services")
@ComponentScan("com.pascal.backskeleton.exception")
public class BackSkeletonApplication {
    public static void main(String[] args) {
        SpringApplication.run(BackSkeletonApplication.class, args);
    }
}
