package com.lakshmi.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
        System.out.println("hello semantic release");
        
		hello1();
		
    }

    
	 private static void hello1() {
        System.out.println("Welcome to the minor release demo!");
		System.out.println("hello");
		
    }
	
}
