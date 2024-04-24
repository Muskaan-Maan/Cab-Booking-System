package com.cabBook.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name="driverDetail")
public class Driver {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int driverId;
	@Column(name="name")
	private String name;
	@Column(name="mobile")
	private String mobile;
	@Column(name="cmodel")
	private String carModel;
	@Column(name="cnumber")
	private String carNum;
	@Column(name="password")
	private String password;
	@Column(name="email")
	private String email;
	
	
	
	public Driver() {
		
	}


	public Driver(int driverId, String name, String mobile, String carModel, String carNum, String password,
			String email) {
		super();
		this.driverId = driverId;
		this.name = name;
		this.mobile = mobile;
		this.carModel = carModel;
		this.carNum = carNum;
		this.password = password;
		this.email = email;
	}


	public int getDriverId() {
		return driverId;
	}


	public void setDriverId(int driverId) {
		this.driverId = driverId;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getMobile() {
		return mobile;
	}


	public void setMobile(String mobile) {
		this.mobile = mobile;
	}


	public String getCarModel() {
		return carModel;
	}


	public void setCarModel(String carModel) {
		this.carModel = carModel;
	}


	public String getCarNum() {
		return carNum;
	}


	public void setCarNum(String carNum) {
		this.carNum = carNum;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	@Override
	public String toString() {
		return "Driver [driverId=" + driverId + ", name=" + name + ", mobile=" + mobile + ", carModel=" + carModel
				+ ", carNum=" + carNum + ", password=" + password + ", email=" + email + "]";
	}
	
	
	
	
	
}
