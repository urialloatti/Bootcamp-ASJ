package com.bootcamp.toDoList.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootcamp.toDoList.entities.ToDoModels;

public interface ToDoRepository extends JpaRepository<ToDoModels, Integer>{
}
