package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Receiver;
import com.example.service.ReceiversInterface;

import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class ReceiverController {
	@Autowired
	private ReceiversInterface receiversInterface;
	
	@GetMapping("/receivers")
	public List<Receiver> receiversList(){
		return receiversInterface.receiversList();
	}
	
	@PostMapping("/addReciever")
	public Receiver saveReceiver( @RequestBody Receiver receiver) {
		return receiversInterface.saveReceiver(receiver);
	}
	@DeleteMapping("/deleteReceiver/{id}")
	public String deleteReceiver(@PathVariable("id") Long receiverId) {
		receiversInterface.deleteReceiver(receiverId);
		return "deleted Successfully";
	}
	
}
