import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<image[]> {
    return this.http.get<image[]>(`${this.baseUrl}/files`);
  }

  deleteFile(filename: string){
    console.log("delete url : "+ filename)
    const shortfilename = filename.substring(filename.lastIndexOf("/") + 1);
    return this.http.delete<any>(`${this.baseUrl}/delete/`+shortfilename);

  }

  

}
interface image{
  url:string  
  name:string
  comment:string
  
  }