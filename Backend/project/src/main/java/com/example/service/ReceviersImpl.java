package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Receiver;
import com.example.repository.ReceiverRepository;

@Service
public class ReceviersImpl implements ReceiversInterface{
	@Autowired
	private ReceiverRepository receiverRepository;
	@Override
	public List<Receiver> receiversList() {
		// TODO Auto-generated method stub
		return receiverRepository.findAll();
	}
	@Override
	public Receiver saveReceiver(Receiver receiver) {
		// TODO Auto-generated method stub
		return receiverRepository.save(receiver);
	}
	@Override
	public void deleteReceiver(Long receiverId) {
		receiverRepository.deleteById(receiverId);
	
		
	}
	
	
}
