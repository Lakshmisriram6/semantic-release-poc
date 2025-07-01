package com.lakshmi.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
        System.out.println("hello semantic release");
        greetUser("Lakshmi");    // BREAKING CHANGE: now requires a name
        greetUser2();
    }

    // 🔺 BREAKING CHANGE: changed method to require a String argument
    private static void greetUser(String name) {
        System.out.println("Hello, " + name + "! This is a major version change.");
    }

    private static void greetUser2() {
        System.out.println("This is a patch-level fix for semantic-release.");
    }
}
