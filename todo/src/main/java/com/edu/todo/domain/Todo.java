package com.edu.todo.domain;

import java.io.Serializable;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
@Entity
public class Todo implements Serializable
{	/*Esta interface Serializable serve para que toda vez que
 	um objeto dessa classe for instanciado, possa ser convertido
 	em sequência de bytes para que possa ser trafegado em redes,
 	armazenados em arquivos de dados e serializados posteriormente
 	e recuperado em memória.*/
	private static final long serialVersionUID = 1L;

	@Id/*A notação abaixo declara que essa variável vai ter uma geração do valor da chave primária por responsabilidade do banco de dados*/
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(nullable = false)
	private String titulo;
	
	@Column(nullable = false)
	private String descricao;
	
	@Column(nullable = false)
	private LocalDateTime dataParaFinalizar;
	/*No momento que inicia, não podemos já começar como finalizado*/
	@Column(nullable = false)
	private Boolean finalizado = false;
}
