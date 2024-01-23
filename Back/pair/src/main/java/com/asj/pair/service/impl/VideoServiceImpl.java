package com.asj.pair.service.impl;

import com.asj.pair.dto.request.VideoLikedRequestDTO;
import com.asj.pair.dto.request.VideoRatingRequestDTO;
import com.asj.pair.dto.request.VideoRequestDTO;
import com.asj.pair.dto.response.VideoResponseDTO;
import com.asj.pair.model.Video;
import com.asj.pair.service.VideoService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.asj.pair.repository.VideoRepository;
import com.asj.pair.service.CategoryService;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class VideoServiceImpl implements VideoService {

    private final VideoRepository videoRepository;
    private final CategoryService categoryService;

    private final ModelMapper mapper = new ModelMapper();

    public VideoServiceImpl(VideoRepository videoRepository, CategoryService categoryService) {
        this.videoRepository = videoRepository;
        this.categoryService = categoryService;
    }

    @Override
    public VideoResponseDTO create(VideoRequestDTO videoReq) {
        Video video = mapper.map(videoReq, Video.class);
        video.setCategory(categoryService.findById(videoReq.getCategory()));
        VideoResponseDTO videoResp = mapper.map(videoRepository.save(video), VideoResponseDTO.class);
        videoResp.setRanking(0);
        return videoResp;
    }

    @Override
    public VideoResponseDTO findById(int id) {
        Optional<Video> videoFound = videoRepository.findById(id);
        if (videoFound.isEmpty()) throw new RuntimeException("Video not found");
        Video video = videoFound.get();
        VideoResponseDTO videoResp = getVideoResponseDTO(video);
        return videoResp;
    }

    @Override
    public List<VideoResponseDTO> findAll() {
        List<Video> videos = videoRepository.findAll();
        List<VideoResponseDTO> videosResp = getVideosResponseDTOS(videos);
        return videosResp;
    }

    @Override
    public VideoResponseDTO watchedVideo(int id) {
        Optional<Video> videoEncontrado = videoRepository.findById(id);
        if (videoEncontrado.isEmpty()) throw new RuntimeException("Video not found");
        Video video = videoEncontrado.get();
        video.setViews(video.getViews() + 1);
        video = videoRepository.save(video);
        VideoResponseDTO videoResp = getVideoResponseDTO(video);
        return videoResp;
    }

    @Override
    public VideoResponseDTO deleteById(int id) {
        Optional<Video> videoFound = videoRepository.findById(id);
        if (videoFound.isEmpty()) throw new RuntimeException("Video not found");
        videoRepository.deleteById(id);
        return getVideoResponseDTO(videoFound.get());
    }

    @Override
    public VideoResponseDTO likedVideo(int id, VideoLikedRequestDTO videoLikedRequestDTO) {
        Optional<Video> videoFound = videoRepository.findById(id);
        if (videoFound.isEmpty()) throw new RuntimeException("Video not found");
        Video video = videoFound.get();
        if (videoLikedRequestDTO.isLiked()) video.setLikes(video.getLikes() + 1);
        else video.setDislikes(video.getDislikes() + 1);
        video = videoRepository.save(video);
        return getVideoResponseDTO(video);
    }

    @Override
    public List<VideoResponseDTO> getByCategory(int id) {
        List<Video> videos = videoRepository.findByCategory_Id(id);
        List<VideoResponseDTO> videosResp = getVideosResponseDTOS(videos);
        return videosResp;
    }

    @Override
    public VideoResponseDTO addRating(int id, VideoRatingRequestDTO videoRatingReq) {
        Optional<Video> videoFound = videoRepository.findById(id);
        if (videoFound.isEmpty()) throw new RuntimeException("Video not found");
        Video video = videoFound.get();
        video.setTotalQualification(video.getTotalQualification() + videoRatingReq.getQualification());
        video.setQualificationQuantity(video.getQualificationQuantity() + 1);
        video = videoRepository.save(video);
        return getVideoResponseDTO(video);
    }

    @Override
    public List<VideoResponseDTO> filterByTitle(String title) {
        List<Video> videos = videoRepository.findByTitleContainingIgnoreCase(title);
        List<VideoResponseDTO> videosResp = getVideosResponseDTOS(videos);
        return videosResp;
    }

    private List<VideoResponseDTO> getVideosResponseDTOS(List<Video> videos) {
        List<VideoResponseDTO> videosResp = new ArrayList<>();
        if (!videos.isEmpty()) {
            for (Video video : videos) {
                VideoResponseDTO videoResp = getVideoResponseDTO(video);
                videosResp.add(videoResp);
            }
        }
        return videosResp;
    }


    private VideoResponseDTO getVideoResponseDTO(Video video) {
        VideoResponseDTO videoResp = mapper.map(video, VideoResponseDTO.class);
        if (video.getTotalQualification() != 0 && video.getQualificationQuantity() != 0) {
            videoResp.setRanking(calculateRanking(video.getTotalQualification(), video.getQualificationQuantity()));
        }
        return videoResp;
    }

    private double calculateRanking(int total, int quantity) {
        double result = (double) total / quantity;
        return Math.round(result * 100.0) / 100.0;
    }
}
