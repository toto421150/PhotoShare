package com.n_tiers.photo_share.Repository;

import org.springframework.stereotype.Repository;

import com.n_tiers.photo_share.Entity.Post;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;


@Repository
public interface PostRepo extends CrudRepository<Post, Integer>{

void delete(Post post);
Post save(Post post);	
ArrayList<Post> findAll();
//Optional<Post> save(Optional<Post> post_changed);
	
	
}
