package com.example.service;

import org.springframework.stereotype.Service;

import com.example.entity.Role;

@Service
public interface RoleInterface {

	public Role addRole(Role role);

}
