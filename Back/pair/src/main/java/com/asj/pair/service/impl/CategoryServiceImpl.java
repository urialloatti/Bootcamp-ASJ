package com.asj.pair.service.impl;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Service;

import com.asj.pair.model.Category;
import com.asj.pair.repository.CategoryRepository;
import com.asj.pair.service.CategoryService;

@Service
public class CategoryServiceImpl implements CategoryService{

	private final CategoryRepository categoryRepository;

	public CategoryServiceImpl(CategoryRepository categoryRepository) {
		this.categoryRepository = categoryRepository;
	}

	@EventListener(ApplicationReadyEvent.class)
	public void defaultCategories() {
		List<String> categories = new ArrayList<>(
				Arrays.asList("Comedy", "Informative", "Sports", "Music", "Gameplay", "Documentary"));
		if (categoryRepository.count() == 0) {
			for (String cat : categories) {
				categoryRepository.save(new Category(cat));
			}
		}
	}
	
	@Override
	public List<Category> findAll(){
		return categoryRepository.findAll();
	}

	@Override
	public Category findById(int id) {
		return categoryRepository.findById(id).get();
	}
	
	
}
