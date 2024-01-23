package com.asj.pair.model;

import jakarta.persistence.*;

@Entity
public class Video {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String url;
	private String title;

	private String description;
	private int views;
	private int likes;
	private int dislikes;
	private int qualificationQuantity;
	private int totalQualification;
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "category_id", referencedColumnName = "id", nullable = false)
	private Category category;

	public Video() {
	}

	public Video(Integer id, String url, String title, String description, int views, int likes, int dislikes,
			int qualificationQuantity, int totalQualification, Category category) {
		this.id = id;
		this.url = url;
		this.title = title;
		this.description = description;
		this.views = views;
		this.likes = likes;
		this.dislikes = dislikes;
		this.qualificationQuantity = qualificationQuantity;
		this.totalQualification = totalQualification;
		this.category = category;
	}

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

	public int getQualificationQuantity() {
		return qualificationQuantity;
	}

	public void setQualificationQuantity(int qualificationQuantity) {
		this.qualificationQuantity = qualificationQuantity;
	}

	public int getTotalQualification() {
		return totalQualification;
	}

	public void setTotalQualification(int totalQualification) {
		this.totalQualification = totalQualification;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

}
