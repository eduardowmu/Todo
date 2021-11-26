package com.edu.todo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.edu.todo.domain.Todo;
import com.edu.todo.service.DbService;

@RestController
@RequestMapping(value="/todo")
public class TodoController 
{	private final DbService service;
	
	@Autowired
	public TodoController(DbService service) {this.service = service;}
	
	@PostMapping("new")
	public ResponseEntity<Todo> save(@RequestBody Todo todo)
	{return ResponseEntity.ok(this.service.save(todo));}

	@GetMapping(value="/{id}")
	public ResponseEntity<Todo> findById(@PathVariable Long id)
	{return ResponseEntity.ok(this.service.findById(id));}
	
	@GetMapping(value="open")
	public ResponseEntity<List<Todo>> listOpen() 
	{return ResponseEntity.ok(this.service.listOpen());}
	
	@GetMapping(value="close")
	public ResponseEntity<List<Todo>> listClose()
	{return ResponseEntity.ok(this.service.listClose());}
	
	@GetMapping
	public ResponseEntity<List<Todo>> findAll()
	{return ResponseEntity.ok(this.service.findAll());}
	
	@PutMapping(value="/update")
	public ResponseEntity<Todo> update(@RequestBody Todo todo)
	{return ResponseEntity.ok().body(this.service.update(todo));}
	
	@DeleteMapping(value="/delete/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) 
	{	this.service.delete(id);
		return ResponseEntity.noContent().build();
	}
}
