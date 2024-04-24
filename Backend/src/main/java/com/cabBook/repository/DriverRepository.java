package com.cabBook.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cabBook.model.Driver;


@Repository
public interface DriverRepository extends JpaRepository<Driver, Integer> {

	public Driver findByEmailAndPassword(String email, String password);

    public Driver findByEmail(String email);
}
