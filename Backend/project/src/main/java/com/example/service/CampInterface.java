package com.example.service;

import org.springframework.stereotype.Service;

import com.example.entity.Camp;

@Service
public interface CampInterface {

	public Camp addCamp(Camp camp);
	
}
