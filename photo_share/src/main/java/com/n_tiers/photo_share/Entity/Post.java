package com.n_tiers.photo_share.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;

@Entity(name="post")
public class Post {
	@javax.persistence.Id
	@GeneratedValue
	private int Id;
	
	public Post() {
		super();
	}
	public int getId() {
		return Id;
	}
	public void setId(int id) {
		Id = id;
	}
	public String getPostid() {
		return postid;
	}
	public void setPostid(String postid) {
		this.postid = postid;
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public String getPostpath() {
		return postpath;
	}
	public void setPostpath(String postpath) {
		this.postpath = postpath;
	}
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
	public Post(int id, String postid, String userid, String postpath, String comment) {
		super();
		Id = id;
		this.postid = postid;
		this.userid = userid;
		this.postpath = postpath;
		this.comment = comment;
	}
	private String postid;
	private String userid;
	private String postpath;
	private String comment;
	
}
