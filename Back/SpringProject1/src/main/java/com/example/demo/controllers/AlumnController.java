package com.example.demo.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Alumn;
import org.springframework.web.bind.annotation.PutMapping;


@RestController
@RequestMapping("/alumns")
public class AlumnController {

	List<Alumn> alumns = new ArrayList<Alumn>(List.of(new Alumn(1, "Bob", "Patiño", 9), new Alumn(2, "Moe", "Sczyslak", 4),
			new Alumn(3, "Edna", "Krabaples", 8.5), new Alumn(4, "Troy", "McLure", 2.6)));


	@GetMapping("")
	public List<Alumn> getAlumns() {
		return this.alumns;
	}
	
	@GetMapping("/{id}")
	public Alumn getAlumnById(@PathVariable int id) {
		for(Alumn alumn: this.alumns) {
			if (alumn.getId() == id) {
				return alumn;
			}
		}
		return null;
	}
	
	@DeleteMapping("/{id}")
	public Alumn deleteAlumnById(@PathVariable int id) {
		for(int i = 0; i < this.alumns.size(); i++) {
			if (this.alumns.get(i).getId() == id) {
				Alumn alumn = this.alumns.get(i);
				this.alumns.remove(i);
				return alumn; 
			}
		}
		return null;
	}
	 
	@PostMapping("")
	public Alumn addAlumn(@RequestBody Alumn alumn) {
		alumn.setId(this.alumns.size() + 1);
		this.alumns.add(alumn);
//		return "redirect:/index.html"; 
		return alumn;
	}
	 
	@PutMapping("/{id}")
	public Alumn updateAlumnById(@PathVariable int id, @RequestBody Alumn alumn) {
		for(int i = 0; i < this.alumns.size(); i++) { 
			if (this.alumns.get(i).getId() == id) {
				this.alumns.remove(i);  
				this.alumns.add(i, alumn); 
				return alumn; 
			} 
		} 
		return null; 
	} 
}
