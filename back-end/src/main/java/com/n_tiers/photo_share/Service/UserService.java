package com.n_tiers.photo_share.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.n_tiers.photo_share.Entity.Users;
import com.n_tiers.photo_share.Repository.UserRepo;

@Service
public class UserService {
	@Autowired
	UserRepo userRepo;
	
	public Users submitMetaDataOfUser(Users user) {
		return userRepo.save(user);
		
	}
	public Users displayUserMetaData(String userid) {
		return userRepo.findByUserid(userid);
	}
	
}
