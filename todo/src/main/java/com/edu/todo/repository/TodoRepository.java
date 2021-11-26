package com.edu.todo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.edu.todo.domain.Todo;
@Repository
public interface TodoRepository extends JpaRepository<Todo, Long> 
{	@Query("SELECT o FROM Todo o WHERE o.finalizado=false ORDER BY o.dataParaFinalizar")
	public List<Todo> listOpen();

	@Query("SELECT o FROM Todo o WHERE o.finalizado=true ORDER BY o.dataParaFinalizar")
	public List<Todo> listClose();
}