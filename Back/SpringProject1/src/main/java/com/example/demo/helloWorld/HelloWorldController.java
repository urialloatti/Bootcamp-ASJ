package com.example.demo.helloWorld;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {
	
	@GetMapping("/get-request/{name}")
	public String myGetMethod(@PathVariable String name) {
		return "My string ." + name;
	}

}
