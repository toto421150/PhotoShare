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
    return this.http.post<image>(`${this.baseUrl}/upload`, formData
    );
  }

  getAllPhotos(): Observable<image[]> {
    return this.http.get<image[]>(`${this.baseUrl}/files`);
  }

  deletePhoto(filename: string){
    return this.http.delete<image>(`${this.baseUrl}/files/`+filename);
  }
}

interface image{
  url:string  
  name:string
  comment:string
}