package com.asj.pair.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.asj.pair.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Integer>{
}
