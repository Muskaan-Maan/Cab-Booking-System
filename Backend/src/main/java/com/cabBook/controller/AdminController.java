package com.cabBook.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cabBook.model.Admin;
import com.cabBook.service.AdminService;



@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class AdminController {


	@Autowired
	AdminService adminService;
	
	@PostMapping("/registeradmin") 
	public Admin registerAdmin(@RequestBody Admin admin) throws Exception {
		
		String tempEmailId = admin.getEmail();
		if(tempEmailId != null && "".equals(tempEmailId)) {
			Admin adminobj = adminService.fetchAdminByEmailId(tempEmailId);
			if(adminobj != null) {
				throw new Exception("admin with "+tempEmailId+" already exist");
			}
		}
		Admin adminobj = null;
		adminobj = adminService.saveAdmin(admin);
		return adminobj;
	}
	
	@PostMapping("/loginadmin")
	public Admin loginAdmin(@RequestBody Admin admin) throws Exception{
		String tempEmailId = admin.getEmail();
		String tempPassword = admin.getPassword();
		
		Admin adminobj = null;
		
		if(tempEmailId != null && tempPassword != null) {
			adminobj = adminService.fetchAdminByEmailIdAndPassword(tempEmailId, tempPassword);
		}
		if(adminobj == null) {
			throw new Exception("Bad credentials");
		}
		return adminobj;
	}
	
	
	
}
