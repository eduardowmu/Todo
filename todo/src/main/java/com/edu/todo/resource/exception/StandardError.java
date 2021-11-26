package com.edu.todo.resource.exception;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class StandardError implements Serializable
{	private static final long serialVersionUID = 1L;
	private Long timeStamp;
	private Integer status;
	private String message;
}