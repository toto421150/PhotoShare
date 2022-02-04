import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FileUploadService } from 'src/app/services/file-upload.service';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {
  
    // Declaration des variables
    popupUpdate=false;
    imageData = data;
    searchText: string="";
    myTempIndex:number=-1;
    myTempurl:string="";
    myTempComment:string="";
    imageInfos?: Observable<any>;
  
  constructor(private uploadService: FileUploadService) {}
  ngOnInit() {
    this.imageInfos = this.uploadService.getFiles();
  }



  //Fonction d'upload des photos
  createPhoto(){
    console.log("create works!");
  }

  //Fonctions de modification des commentaires
  updateIndex(index:number){
    this.myTempIndex=index;
    console.log(this.myTempIndex);
    this.popupUpdate=true;
  }
  updatePhoto(inputComment:string){
    this.imageData[this.myTempIndex].comment=inputComment;
    this.myTempComment="";

  }

  //Fonction de suppression de photos
  deletePhoto(i:number){
    
    //this.imageData.splice(i, 1);
    this.imageInfos?.subscribe((value) => { this.uploadService.deleteFile(value[i].url); });
    this.imageInfos?.subscribe((value) => {console.log(value[i].url); })
    console.log("delete works!");
    this.ngOnInit()
  }
}

const data = [
  {
    url: 'https://preview.ibb.co/jrsA6R/img12.jpg',
    name:"tt",
    comment: "yeet"
  }
];

