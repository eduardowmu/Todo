package com.edu.todo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.edu.todo.domain.Todo;
@Repository
public interface TodoRepository extends JpaRepository<Todo, Long> {}