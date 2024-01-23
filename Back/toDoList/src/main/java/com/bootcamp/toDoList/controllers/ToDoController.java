package com.bootcamp.toDoList.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootcamp.toDoList.entities.ToDoModels;
import com.bootcamp.toDoList.services.ToDoService;

@RestController
//@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/to-do")
public class ToDoController {
	
	@Autowired
	ToDoService toDoService;

	@GetMapping("/test")
	public ResponseEntity<String> test() {
//		return new ResponseEntity<String>("myString", HttpStatus.ACCEPTED);
		return ResponseEntity.ok("myString");
	}
	
	@GetMapping()
	public ResponseEntity<List<ToDoModels>> getToDos() {
		return ResponseEntity.ok(toDoService.getToDos());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Optional<ToDoModels>> getToDoById(@PathVariable int id) {
		return ResponseEntity.ok(toDoService.getToDoById(id));
	}
	
	@GetMapping("/toggle-done/{id}")
	public ResponseEntity<Optional<ToDoModels>> toggleDoneToDoById(@PathVariable int id) {
		return ResponseEntity.ok(toDoService.toggleDoneToDoById(id));
	}
	
	@PostMapping()
	public ResponseEntity<ToDoModels> createToDo(@RequestBody ToDoModels toDo) {
		return ResponseEntity.ok(toDoService.createToDo(toDo));
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Optional<ToDoModels>> updateToDo(@PathVariable Integer id, @RequestBody String toDoString) {
		return ResponseEntity.ok(toDoService.updateById(id, toDoString));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Optional<ToDoModels>> toggleCalncelById(@PathVariable Integer id) {
		return ResponseEntity.ok(toDoService.toggleCancelToDoById(id));
	}
	
	@DeleteMapping("/delete-all")
	public ResponseEntity<String> deleteAll() {
		toDoService.deleteAll();
		return ResponseEntity.ok("Base de dato vaciada con éxito");
	}
}
