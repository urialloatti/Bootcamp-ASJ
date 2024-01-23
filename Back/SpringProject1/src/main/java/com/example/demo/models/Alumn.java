package com.example.demo.models;

public class Alumn {

	private Integer id;
	private String name;
	private String surname;
	private double grade;
	
	public Alumn(Integer id, String name, String surname, double grade) {
		this.id = id;
		this.name = name;
		this.surname = surname;
		this.grade = grade;
	}
	public Integer getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	public double getGrade() {
		return grade;
	}

	public void setGrade(Double grade) {
		this.grade = grade;
	}
	
	
}
