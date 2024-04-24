package com.cabBook.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value=HttpStatus.NOT_FOUND)
public class AdminNotFoundException extends Exception{

	private static final int serialVersionUID=1;

	public AdminNotFoundException(String msg)
	{
		super(msg);
	}
}
