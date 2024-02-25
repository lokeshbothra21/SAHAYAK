package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Camp;
import com.example.service.CampInterface;

@RestController
public class CampController {
	@Autowired
	private CampInterface campInterface;
	@PostMapping("/addCamp")
	public Camp addCamp(@RequestBody Camp camp) {
		return campInterface.addCamp(camp);
	}
}
