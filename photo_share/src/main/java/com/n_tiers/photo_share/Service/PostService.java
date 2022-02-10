package com.n_tiers.photo_share.Service;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.n_tiers.photo_share.Entity.Post;
import com.n_tiers.photo_share.Repository.PostRepo;

@Service
public class PostService {

	@Autowired
	PostRepo PostRepo;
	
	
	public Post submitPostToDataBase(Post post) {
		
		return PostRepo.save(post);
		
	}
	public ArrayList<Post> retrivePostFromDB(){
		return PostRepo.findAll();
	}
	
	public Post changecomment(int id,String comment) {
		Optional<Post> post_changed = PostRepo.findById(id);
		post_changed.get().setComment(comment);
		return PostRepo.save(post_changed.get());
	}
	
}
