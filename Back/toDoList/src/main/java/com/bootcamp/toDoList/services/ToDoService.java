package com.bootcamp.toDoList.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootcamp.toDoList.entities.ToDoModels;
import com.bootcamp.toDoList.repositories.ToDoRepository;

@Service
public class ToDoService {
	
	@Autowired
	ToDoRepository toDoRepository;

	public List<ToDoModels> getToDos() {
		return toDoRepository.findAll();
	}
	
	public Optional<ToDoModels> getToDoById(int id) {
		return toDoRepository.findById(id);
	}
	
	public ToDoModels createToDo(ToDoModels toDo) {
		toDoRepository.save(toDo);
		return toDo;
	}
	
	public Optional<ToDoModels> deleteToDoById(Integer id) {
		Optional<ToDoModels> deleted = toDoRepository.findById(id);
		toDoRepository.deleteById(id);
		return deleted;	
	}
	
	public Optional<ToDoModels> updateById(Integer id, String toDoString) {
		Optional<ToDoModels> oldToDOptional = toDoRepository.findById(id);
		if (oldToDOptional.isPresent()) {
			ToDoModels t = oldToDOptional.get();
			t.setToDoString(toDoString);
			toDoRepository.save(t);
			return Optional.of(t);
		}
		return oldToDOptional; 
	}
	
	public Optional<ToDoModels> toggleCancelToDoById(Integer id) {
		Optional<ToDoModels> oldToDoOptional = toDoRepository.findById(id);
		if (oldToDoOptional.isPresent()) {
			ToDoModels t = oldToDoOptional.get();
			t.setDeleted(!t.isDeleted());
			toDoRepository.save(t);
			return Optional.of(t);
		}
		return oldToDoOptional;
	}
	
	public Optional<ToDoModels> toggleDoneToDoById(Integer id) {
		Optional<ToDoModels> oldToDoOptional = toDoRepository.findById(id);
		if (oldToDoOptional.isPresent()) {
			ToDoModels t = oldToDoOptional.get();
			t.setDone(!t.isDone());
			toDoRepository.save(t);
			return Optional.of(t);
		}
		return oldToDoOptional;
	}
	
	public void deleteAll() {
		toDoRepository.deleteAll();
	}
}
