package com.n_tiers.photo_share.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.n_tiers.photo_share.Entity.Users;

@Repository
public interface UserRepo extends CrudRepository<Users,Integer> {

	Users save(Users user);
	Users findByUserid(String userid);
	
	
	
	
}
