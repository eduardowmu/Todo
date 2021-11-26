package com.edu.todo.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import com.edu.todo.service.DbService;

@Configuration
@Profile("test")
public class TestConfig 
{	private final DbService service;

	@Autowired
	public TestConfig(DbService service) {this.service = service;}
	
	/*Essa notação identifica que esse método será executado sempre que uma
	 *nova instância do teste for iniciada.
	@Bean
	public boolean instancia() 
	{	this.service.save();
		return true;
	}*/
}