package com.example.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.entity.Receiver;

@Service
public interface ReceiversInterface {

	 //List<Receiver> receivers();

	public List<Receiver> receiversList();

	public Receiver saveReceiver(Receiver receiver);

	public void deleteReceiver(Long receiverId);

	

}
