package com.lakshmi.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
        System.out.println("hello semantic release");
        greetUser();    // existing feature
        greetUSer1();   // fixed naming convention
    }

    private static void greetUser() {
        System.out.println("This is a minor feature update for semantic-release.");
    }

    // ✅ Renamed method to fix casing
    private static void greetUSer1() {
        System.out.println("This is a patch-level fix for semantic-release.");
    }
}
