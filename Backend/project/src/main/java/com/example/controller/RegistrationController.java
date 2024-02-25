package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Registration;
import com.example.service.RegistrationInterface;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class RegistrationController {
	@Autowired
	private RegistrationInterface registrationInterface;
	
	@PostMapping("/addRegistraion")
	public Registration addRegistraion(  @RequestBody Registration registration) {
		return registrationInterface.addRegistration(registration);
	}
}
