package com.asj.pair.dto.request;

public class VideoRatingRequestDTO {
    private int qualification;

    public VideoRatingRequestDTO(int qualification) {
        this.qualification = qualification;
    }

    public VideoRatingRequestDTO() {
    }

    public int getQualification() {
        return qualification;
    }

    public void setQualification(int qualification) {
        this.qualification = qualification;
    }
}
