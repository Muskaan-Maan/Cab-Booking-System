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

import com.cabBook.exception.DriverNotFoundException;
import com.cabBook.model.Driver;
import com.cabBook.repository.DriverRepository;
import com.cabBook.service.DriverService;



@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")

public class DriverController {

	@Autowired
	DriverRepository driverRepository;
	@Autowired
	DriverService driverService;
	
	
	@PostMapping("registerdriver") 
	public Driver registerDriver(@RequestBody Driver driver) throws Exception {
		
		String tempEmailId = driver.getEmail();
		if(tempEmailId != null && "".equals(tempEmailId)) {
			Driver driverobj = driverService.fetchDriverByEmailId(tempEmailId);
			if(driverobj != null) {
				throw new Exception("driver with "+tempEmailId+" already exist");
			}
		}
		Driver driverobj = null;
		driverobj = driverService.saveDriverDetail(driver);
		return driverobj;
	}
	
	@PostMapping("logindriver")
	public Driver loginDriver(@RequestBody Driver driver) throws Exception{
		String tempEmailId = driver.getEmail();
		String tempPassword = driver.getPassword();
		
		Driver driverobj = null;
		
		if(tempEmailId != null && tempPassword != null) {
			driverobj = driverService.fetchDriverByEmailIdAndPassword(tempEmailId, tempPassword);
		}
		if(driverobj == null) {
			throw new Exception("Bad credentials");
		}
		return driverobj;
	}
	
	@GetMapping("drivers")
	public List<Driver> getAllDrivers(){
		
		return driverRepository.findAll();
	}
	
	@PostMapping("drivers")
	public Driver saveDriver(@RequestBody Driver driver) {
		
		return driverRepository.save(driver);
	}
	
	@GetMapping("drivers/{id}")
	public ResponseEntity<Driver> getDriverById(@PathVariable int id) throws DriverNotFoundException{
		
		Driver driver = driverRepository.findById(id).orElseThrow(()-> new DriverNotFoundException("Driver not found" + id));
	return ResponseEntity.ok(driver);
	
	}
	
	@DeleteMapping("drivers/{id}")
	public ResponseEntity<Map<String,Boolean>> deleteDriver(@PathVariable int id)throws DriverNotFoundException{
		
		Driver driver = driverRepository.findById(id).orElseThrow(()-> new DriverNotFoundException("Driver not found" + id));
		driverRepository.delete(driver);
		
		Map<String,Boolean> response = new HashMap<>();
		response.put("Deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	@PutMapping("drivers/{id}")
	public ResponseEntity<Driver> updateDriver(@PathVariable int id, @RequestBody Driver driverDetail) throws DriverNotFoundException{
		
		Driver driver = driverRepository.findById(id).orElseThrow(()-> new DriverNotFoundException("Driver not found" + id));
		
		driver.setName(driverDetail.getName());
		driver.setMobile(driverDetail.getMobile());
		driver.setCarModel(driverDetail.getCarModel());
		driver.setCarNum(driverDetail.getCarNum());
		driver.setPassword(driverDetail.getPassword());
		driver.setEmail(driverDetail.getEmail());
		
		Driver updatedDriver = driverRepository.save(driver);
		
		return ResponseEntity.ok(updatedDriver);
	}
}
