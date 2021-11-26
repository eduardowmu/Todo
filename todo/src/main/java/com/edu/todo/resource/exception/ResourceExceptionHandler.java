package com.edu.todo.resource.exception;

import javax.servlet.ServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.edu.todo.service.exception.ObjectNotFoundException;

@ControllerAdvice
public class ResourceExceptionHandler 
{	@ExceptionHandler(ObjectNotFoundException.class)
	public ResponseEntity<StandardError> objectNotFoundException(
			ObjectNotFoundException ex, ServletRequest request)
	{	StandardError error = StandardError.builder()
				.timeStamp(System.currentTimeMillis())
				.message(ex.getMessage())
				.status(HttpStatus.NOT_FOUND.value())
				.build();
	
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
	}
}
