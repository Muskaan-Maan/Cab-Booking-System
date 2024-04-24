package com.cabBook.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cabBook.model.User;
import com.cabBook.repository.UserRepository;



@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;
	
	public User saveUser(User user) {
		return userRepository.save(user);
	}
	
	public User fetchUserByEmailIdAndPassword(String email, String password) {
		User user = userRepository.findByEmailAndPassword(email, password);
		return user;
	}

	public User fetchUserByEmailId(String email) {
		
		return userRepository.findByEmail(email);
		
	}
}
