package com.example.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Registration;
import com.example.repository.RegistrationRepository;
@Service
public class RegistrationImpl implements RegistrationInterface{
	@Autowired
	private RegistrationRepository registrationRepository;
	@Override
	public Registration addRegistration(Registration registration) {
		// TODO Auto-generated method stub
		return registrationRepository.save(registration);
	} 
	
}
