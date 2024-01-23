package com.asj.pair.service;

import java.util.List;

import com.asj.pair.model.Category;

public interface CategoryService {
	
	 List<Category> findAll();
	 Category findById(int id);
}
