package com.cabBook.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cabBook.model.Driver;
import com.cabBook.repository.DriverRepository;


@Service
public class DriverService {

	@Autowired
	private DriverRepository driverRepository;
	
	public Driver saveDriverDetail(Driver driver) {
		return driverRepository.save(driver);
	}
	
	public Driver fetchDriverByEmailIdAndPassword(String email, String password) {
		Driver driver = driverRepository.findByEmailAndPassword(email, password);
		return driver;
	}

	public Driver fetchDriverByEmailId(String email) {
		
		return driverRepository.findByEmail(email);
		
	}
}
