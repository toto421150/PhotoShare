package com.n_tiers.photo_share.Controller;

import java.io.IOException;
import java.nio.file.DirectoryNotEmptyException;
import java.nio.file.Files;
import java.nio.file.NoSuchFileException;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
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
		
		
		System.out.println(post.getPostpath());
		
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
	
	@DeleteMapping(path="/{id}", produces = "application/json")
	private void delete(@PathVariable Integer id) {
		System.out.println("del " + id);
		System.out.println(PostService.retrievefilenamebyid(id));

		
		
		 try {
	            Files.deleteIfExists(
	                Paths.get("uploads/"+ PostService.retrievefilenamebyid(id)));
	        }
	        catch (NoSuchFileException e) {
	            System.out.println(
	                "No such file/directory exists");
	        }
	        catch (DirectoryNotEmptyException e) {
	            System.out.println("Directory is not empty.");
	        }
	        catch (IOException e) {
	            System.out.println("Invalid permissions.");
	        }
	 
	        System.out.println("Deletion successful.");
	    
		
		
		PostService.delete(id);
		return ;

	}
	
}
