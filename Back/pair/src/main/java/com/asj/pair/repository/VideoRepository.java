package com.asj.pair.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.asj.pair.model.Video;

import java.util.List;

public interface VideoRepository extends JpaRepository<Video, Integer>{

    List<Video> findByCategory_Id(Integer categoryId);
    List<Video> findByTitleContainingIgnoreCase(String title);
}
