package com.edu.todo;



//import java.time.LocalDateTime;
//import java.time.format.DateTimeFormatter;

//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

//import com.edu.todo.domain.Todo;
//import com.edu.todo.repository.TodoRepository;

@SpringBootApplication
public class TodoApplication //implements CommandLineRunner
{	//@Autowired private TodoRepository repository;
	
	public static void main(String[] args) 
	{SpringApplication.run(TodoApplication.class, args);}
	/*
	@Override public void run(String... args) throws Exception 
	{	DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm");
		Todo t1 = Todo.builder()
					.titulo("Todo")
					.descricao("Criação de nova entidade Todo")
					.dataParaFinalizar(LocalDateTime.parse("24/11/2021 10:40", formatter))
					.finalizado(false).build();
		
		this.repository.save(t1);
	}*/
}