package com.bezkoder.spring.files.upload.model;

public class FileInfo {
  private String name;
  private String url;
  private String comment;

  public FileInfo(String name, String url,String comment) {
    this.name = name;
    this.url = url;
    this.comment= comment;
  }

  public String getName() {
    return this.name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getComment() {
    return this.comment;
  }

  public void setComment(String comment) {
    this.comment = comment;
  }
  public String getUrl() {
	    return this.url;
	  }

	  public void setUrl(String url) {
	    this.url = url;
	  }
}
