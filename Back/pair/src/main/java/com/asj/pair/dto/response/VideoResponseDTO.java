package com.asj.pair.dto.response;

import com.asj.pair.model.Category;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class VideoResponseDTO {
    private Integer id;
    private String url;
    private String title;
    private String description;
    private int views;
    private int likes;
    private int dislikes;
    private double ranking;
    private Category category;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getViews() {
        return views;
    }

    public void setViews(int views) {
        this.views = views;
    }

    public int getLikes() {
        return likes;
    }

    public void setLikes(int likes) {
        this.likes = likes;
    }

    public int getDislikes() {
        return dislikes;
    }

    public void setDislikes(int dislikes) {
        this.dislikes = dislikes;
    }

    public double getRanking() {
        return ranking;
    }

    public void setRanking(double ranking) {
        this.ranking = ranking;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public VideoResponseDTO(Integer id) {
        this.id = id;
    }
    
    public VideoResponseDTO() {
	}

	public VideoResponseDTO(Integer id, String url, String title, String description, int views, int likes, int dislikes, double ranking, Category category) {
        this.id = id;
        this.url = url;
        this.title = title;
        this.description = description;
        this.views = views;
        this.likes = likes;
        this.dislikes = dislikes;
        this.ranking = ranking;
        this.category = category;
    }
}
