package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import com.example.entity.Role;
import com.example.service.RoleInterface;


@RestController
public class RoleController {
	@Autowired
	private RoleInterface roleInterface;
	@PostMapping("/addRole")
	public Role addRole(  @RequestBody Role role) {
		return roleInterface.addRole(role);
	}
}
