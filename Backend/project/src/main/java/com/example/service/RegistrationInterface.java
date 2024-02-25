package com.example.service;

import org.springframework.stereotype.Service;

import com.example.entity.Registration;
@Service
public interface RegistrationInterface {

	public Registration addRegistration(Registration registration);

}
