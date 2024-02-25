package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.entity.Camp;

@Repository
public interface CampRepository extends  JpaRepository<Camp,Long>{
	
}
