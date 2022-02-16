import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  uploadPhoto(file: File) /*Observable<HttpEvent<any>>*/ {
    const formData: FormData = new FormData();
    formData.append('file', file);   
    return this.http.post<image>(`${this.baseUrl}/upload`, formData);
  }

  uploadPost(comment: String,fileName:String) /*Observable<HttpEvent<any>>*/ {
    var body = {"comment" : comment , "postpath": fileName,};
    console.log(body)
    return this.http.post<post>(`${this.baseUrl}/post`, body);
  }

  getAllPhotos() {
    return this.http.get<image[]>(`${this.baseUrl}/files`);
  }

  getAllPosts() {
    return this.http.get<post[]>(`${this.baseUrl}/post`);
  }

  patchPhoto(id:number,comment:string){
    var body = comment;
    return this.http.patch<image[]>(`${this.baseUrl}/post/`+id,body);
  }

  // deletePhoto(filename: string){
  //   return this.http.delete<image>(`${this.baseUrl}/files/`+filename);
  // }
  deletePost(id: number){
    return this.http.delete<post>(`${this.baseUrl}/post/`+id);
  }
}

interface image{
  url:string  
  name:string
  comment:string
}

interface post{
  postid: number,
  userid: number,
  postpath: string,
  comment: string,
  id: number
}