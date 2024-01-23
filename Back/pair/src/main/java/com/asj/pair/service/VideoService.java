package com.asj.pair.service;

import com.asj.pair.dto.request.VideoLikedRequestDTO;
import com.asj.pair.dto.request.VideoRatingRequestDTO;
import com.asj.pair.dto.request.VideoRequestDTO;
import com.asj.pair.dto.response.VideoResponseDTO;

import java.util.List;

public interface VideoService {

    VideoResponseDTO create(VideoRequestDTO videoReq);
    VideoResponseDTO findById(int id);
    List<VideoResponseDTO> findAll();
    VideoResponseDTO deleteById(int id);
    VideoResponseDTO watchedVideo(int id);
    VideoResponseDTO likedVideo(int id, VideoLikedRequestDTO videoLikedRequestDTO);
    List<VideoResponseDTO> getByCategory(int id);

    VideoResponseDTO addRating(int id, VideoRatingRequestDTO videoRatingReq);

    List<VideoResponseDTO> filterByTitle(String title);
}
