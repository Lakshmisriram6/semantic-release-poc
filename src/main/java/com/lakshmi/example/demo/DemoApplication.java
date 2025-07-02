package com.lakshmi.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
        System.out.println("hello semantic release");
        greetNewUser();  // New feature added
		hello();
		
    }

    private static void greetNewUser() {
        System.out.println("Welcome to the minor release demo!");
    }
	 private static void hello() {
        System.out.println("Welcome to the minor release demo!");
    }
	
}
