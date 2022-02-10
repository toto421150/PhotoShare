package com.n_tiers.photo_share.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import com.sun.istack.NotNull;

@Entity(name="Users")
public class Users {
	@Id
	@GeneratedValue
	private int id;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getMdp() {
		return mdp;
	}
	public void setMdp(String mdp) {
		this.mdp = mdp;
	}
	public Users(int id, String userid, String userName, String name, String mdp) {
		super();
		this.id = id;
		this.userid = userid;
		this.userName = userName;
		this.name = name;
		this.mdp = mdp;
	}
	public Users() {
		super();
		// TODO Auto-generated constructor stub
	}
	@NotNull
	private String userid;
	private String userName;
	private String name;
	private String mdp;
	
	
}
