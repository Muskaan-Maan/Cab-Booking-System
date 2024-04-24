package com.cabBook.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cabBook.exception.UserNotFoundException;
import com.cabBook.model.User;
import com.cabBook.repository.UserRepository;
import com.cabBook.service.UserService;



@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class UserController {

	@Autowired
	UserRepository userRepository;
	@Autowired
	UserService userService;
	
	@PostMapping("/registeruser") 
	public User registerUser(@RequestBody User user) throws Exception {
		
		String tempEmailId = user.getEmail();
		if(tempEmailId != null && "".equals(tempEmailId)) {
			User userobj = userService.fetchUserByEmailId(tempEmailId);
			if(userobj != null) {
				throw new Exception("user with "+tempEmailId+" already exist");
			}
		}
		User userobj = null;
		userobj = userService.saveUser(user);
		return userobj;
	}
	
	@PostMapping("/login")
	public User loginUser(@RequestBody User user) throws Exception{
		String tempEmailId = user.getEmail();
		String tempPassword = user.getPassword();
		
		User userobj = null;
		
		if(tempEmailId != null && tempPassword != null) {
			userobj = userService.fetchUserByEmailIdAndPassword(tempEmailId, tempPassword);
		}
		if(userobj == null) {
			throw new Exception("Bad credentials");
		}
		return userobj;
	}
	
	
	
	@GetMapping("users")
	public List<User> getAllUsers(){
		
		return userRepository.findAll();
	}
	
	@PostMapping("users")
	public User saveUser(@RequestBody User user) {
		
		return userRepository.save(user);
	}
	
	@GetMapping("users/{id}")
	public ResponseEntity<User> getUserById(@PathVariable int id) throws UserNotFoundException{
		
		User user = userRepository.findById(id).orElseThrow(()-> new UserNotFoundException("User not found" + id));
	return ResponseEntity.ok(user);
	
	}
	
	@DeleteMapping("users/{id}")
	public ResponseEntity<Map<String,Boolean>> deleteUser(@PathVariable int id)throws UserNotFoundException{
		
		User user = userRepository.findById(id).orElseThrow(()-> new UserNotFoundException("User not found" + id));
		userRepository.delete(user);
		
		Map<String,Boolean> response = new HashMap<>();
		response.put("Deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	@PutMapping("users/{id}")
	public ResponseEntity<User> updateUser(@PathVariable int id, @RequestBody User userDetail) throws UserNotFoundException{
		
		User user = userRepository.findById(id).orElseThrow(()-> new UserNotFoundException("User not found" + id));
		
		user.setUserName(userDetail.getUserName());
		user.setMobileNumber(userDetail.getMobileNumber());
		user.setPassword(userDetail.getPassword());
		user.setEmail(userDetail.getEmail());
		
		User updatedUser = userRepository.save(user);
		
		return ResponseEntity.ok(updatedUser);
	}
}
