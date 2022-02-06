import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {
  constructor(private fileService: FileService) {}

  ngOnInit() {
    //this.imageInfos = this.fileService.getFiles();
    this.fileService.getAllPhotos().subscribe(data=> {// GET: list des photos
      for (let i = 0; i < data.length; i++) {
        this.imageData = [...this.imageData, {url:data[i].url,name:data[i].name,comment:data[i].comment}];
      }
      console.log(this.imageData)
    })
  }

  // Declaration des variables
  popupUpdate=false;
  imageData :any= [];
  searchText: string="";
  myTempIndex:number=-1;
  myTempurl:string="";
  myTempComment:string="";
  //imageInfos?: Observable<any>;
    

  //Fonctions de modification des commentaires
  updateIndex(index:number){
    this.myTempIndex=index;
    // console.log(this.myTempIndex);
    this.popupUpdate=true;
  }
  updatePhoto(inputComment:string){
    this.imageData[this.myTempIndex].comment=inputComment;
    this.myTempComment="";
  }

  //Fonction de suppression de photos
  deletePhoto(i:number){
    this.fileService.deletePhoto(this.imageData[i].name).subscribe(data=>{
    })
    window.location.reload()
  }
}
