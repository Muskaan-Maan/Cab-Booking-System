package com.cabBook.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="userDetails")
public class User {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    private int userId;
	
	@Column(name="user_name")
	private String userName;
	
	@Column(name="mobile_no")
	private String mobileNumber;
	
	@Column(name="password")
	private String password;
	
	@Column(name="email_id")
	private String email;

	public User() {
		super();
	}

	public User(int userId, String userName, String mobileNumber, String password, String email) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.mobileNumber = mobileNumber;
		this.password = password;
		this.email = email;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
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
		return "User [userId=" + userId + ", userName=" + userName + ", mobileNumber=" + mobileNumber + ", password="
				+ password + ", email=" + email + "]";
	}
	
}
