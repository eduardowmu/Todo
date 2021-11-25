package com.edu.todo.service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edu.todo.domain.Todo;
import com.edu.todo.repository.TodoRepository;

@Service
public class DbService 
{	private final TodoRepository repository;
	
	@Autowired
	public DbService(TodoRepository repository) {this.repository = repository;}
	
	public void save()
	{	DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm");
		Todo t1 = Todo.builder()
				.titulo("Todo")
				.descricao("Criação de nova entidade Todo 2")
				.dataParaFinalizar(LocalDateTime.parse("25/11/2021 11:40", formatter))
				.finalizado(false).build();
	
		this.repository.save(t1);
	}
}
