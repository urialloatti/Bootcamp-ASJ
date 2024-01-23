package com.asj.pair.dto.request;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class VideoRequestDTO {

    private String url;
    private String title;
    private int category;
    private String description;

    public VideoRequestDTO() {
    }
    
    public VideoRequestDTO(String url, String title, int category, String description) {
		super();
		this.url = url;
		this.title = title;
		this.category = category;
		this.description = description;
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

    public int getCategory() {
        return category;
    }

    public void setCategory(int category) {
        this.category = category;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
