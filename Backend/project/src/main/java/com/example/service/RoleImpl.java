package com.example.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.repository.RoleRepository;
@Service
public class RoleImpl implements RoleInterface{

	@Autowired 
	private RoleRepository roleRepository;

	@Override
	public com.example.entity.Role addRole(com.example.entity.Role role) {
		// TODO Auto-generated method stub
		return roleRepository.save(role);
	}
	
	

	
}
