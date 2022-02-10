package com.n_tiers.photo_share.Controller;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.n_tiers.photo_share.Entity.Post;
import com.n_tiers.photo_share.Service.PostService;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/post")
public class PostController {

	@Autowired
	PostService PostService;
	
	
	@PostMapping("")
	private Post submitUserPost(@RequestBody Post post) {
		return PostService.submitPostToDataBase(post);
		
	}
	
	@GetMapping("")
	private ArrayList<Post> getAllPost(){
	return PostService.retrivePostFromDB();
	
		
	}
	
	@PatchMapping(path="/{id}", produces = "application/json")
	private @ResponseBody Post changeComment(@PathVariable Integer id,@RequestBody String Comment) {
		//String  Comment = "commmtest";
		System.out.println("patch");
		return PostService.changecomment(id, Comment);

	}
}
