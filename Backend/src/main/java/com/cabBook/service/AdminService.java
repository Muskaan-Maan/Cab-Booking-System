package com.cabBook.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cabBook.model.Admin;
import com.cabBook.repository.AdminRepository;


@Service
public class AdminService {

	@Autowired
	private AdminRepository adminRepository;
	
	public Admin saveAdmin(Admin admin) {
		return adminRepository.save(admin);
	}
	
	public Admin fetchAdminByEmailIdAndPassword(String email, String password) {
		Admin admin = adminRepository.findByEmailAndPassword(email, password);
		return admin;
	}

	public Admin fetchAdminByEmailId(String email) {
		
		return adminRepository.findByEmail(email);
		
	}
}
