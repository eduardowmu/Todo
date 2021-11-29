package com.edu.todo.service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edu.todo.domain.Todo;
import com.edu.todo.repository.TodoRepository;
import com.edu.todo.service.exception.ObjectNotFoundException;

@Service
public class DbService 
{	private final TodoRepository repository;
	
	@Autowired
	public DbService(TodoRepository repository) {this.repository = repository;}
	
	public Todo save(Todo todo)	{return this.repository.save(todo);}
	
	public Todo findById(Long id)	
	{	return this.repository.findById(id).orElseThrow(() -> 
			new ObjectNotFoundException("Objeto não encontrado " + id + 
					" Tipo: " + Todo.class.getName()));
	}
	
	public List<Todo> listOpen()	{return this.repository.listOpen();}
	
	public List<Todo> listClose()	{return this.repository.listClose();}
	
	public List<Todo> findAll() {return this.repository.findAll();}
	
	public Todo update(Todo todo)
	{	if(!this.repository.existsById(todo.getId()))
		{return this.findById(todo.getId());}
		
		return this.repository.save(todo);
	}
	
	public void delete(Long id) {this.repository.deleteById(id);}
	/*
	public void save()
	{	DateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
		Todo t1 = Todo.builder()
				.titulo("Todo novo")
				.descricao("Criação de nova entidade Todo 2")
				.dataParaFinalizar(this.formatDate(formatter, "27/11/2021"))
				.finalizado(false).build();
	
		this.repository.save(t1);
	}
	
	private Date formatDate(DateFormat formatter, String data)
	{	try	{return formatter.parse(data);} 
		catch(Exception e) {return new Date();}
	}*/
}
