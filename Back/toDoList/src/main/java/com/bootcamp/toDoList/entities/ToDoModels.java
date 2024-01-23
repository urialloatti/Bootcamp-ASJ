package com.bootcamp.toDoList.entities;

//import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="todo")
public class ToDoModels {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String date;
	private String toDoString;
	private boolean done;
	private boolean deleted;
	
	public ToDoModels() {
	}

	public ToDoModels(Integer id, String date, String toDoString, boolean done, boolean deleted) {
		this.id = id;
		this.date = date;
		this.toDoString = toDoString;
		this.done = done;
		this.deleted = deleted;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getToDoString() {
		return toDoString;
	}

	public void setToDoString(String toDoString) {
		this.toDoString = toDoString;
	}

	public boolean isDone() {
		return done;
	}

	public void setDone(boolean done) {
		this.done = done;
	}

	public boolean isDeleted() {
		return deleted;
	}

	public void setDeleted(boolean deleted) {
		this.deleted = deleted;
	}

	@Override
	public String toString() {
		return "ToDoModels [id=" + id + ", date=" + date + ", toDoString=" + toDoString + ", done=" + done
				+ ", deleted=" + deleted + "]";
	}
	
	
		

}
