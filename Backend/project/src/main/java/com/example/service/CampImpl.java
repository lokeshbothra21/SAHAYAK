package com.example.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Camp;
import com.example.repository.CampRepository;

@Service
public class CampImpl implements CampInterface{

	@Autowired
	private CampRepository campRepository;
	@Override
	public Camp addCamp(Camp camp) {
		// TODO Auto-generated method stub
		return campRepository.save(camp);
	}
	
}
