package com.asj.pair.controller;

import com.asj.pair.dto.request.VideoLikedRequestDTO;
import com.asj.pair.dto.request.VideoRatingRequestDTO;
import com.asj.pair.dto.request.VideoRequestDTO;
import com.asj.pair.dto.response.VideoResponseDTO;
import com.asj.pair.service.VideoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/app/videos")
public class VideoController {

    private final VideoService videoService;

    public VideoController(VideoService videoService) {
        this.videoService = videoService;
    }

    @PostMapping()
    public ResponseEntity<VideoResponseDTO> create(@RequestBody VideoRequestDTO video) {
        return ResponseEntity.status(HttpStatus.CREATED).body(videoService.create(video));
    }

    @GetMapping("/{id}")
    public ResponseEntity<VideoResponseDTO> findById(@PathVariable int id) {
        return ResponseEntity.status(HttpStatus.OK).body(videoService.findById(id));
    }

    @GetMapping()
    public ResponseEntity<List<VideoResponseDTO>> findAll() {
        return ResponseEntity.status(HttpStatus.OK).body(videoService.findAll());
    }

    @PatchMapping("/watched/{id}")
    public ResponseEntity<VideoResponseDTO> watchedVideo(@PathVariable int id) {
        return ResponseEntity.status(HttpStatus.OK).body(videoService.watchedVideo(id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<VideoResponseDTO> deleteById(@PathVariable int id) {
        return ResponseEntity.status(HttpStatus.OK).body(videoService.deleteById(id));
    }

    @PatchMapping("/liked/{id}")
    public ResponseEntity<VideoResponseDTO> likedVideo(@PathVariable int id, @RequestBody VideoLikedRequestDTO videoLikedRequestDTO) {
        return ResponseEntity.status(HttpStatus.OK).body(videoService.likedVideo(id, videoLikedRequestDTO));
    }

    @GetMapping("/category/{id}")
    public ResponseEntity<List<VideoResponseDTO>> findAll(@PathVariable int id) {
        return ResponseEntity.status(HttpStatus.OK).body(videoService.getByCategory(id));
    }
    
    @GetMapping("/filter_by_title")
    public ResponseEntity<List<VideoResponseDTO>> findAll(@RequestParam String title) {
        return ResponseEntity.status(HttpStatus.OK).body(videoService.filterByTitle(title));
    }

    @PatchMapping("/ratings/{id}")
    public ResponseEntity<VideoResponseDTO> addRating(@PathVariable int id, @RequestBody VideoRatingRequestDTO videoRatingReq){
        return ResponseEntity.status(HttpStatus.OK).body(videoService.addRating(id,videoRatingReq));
    }

}
