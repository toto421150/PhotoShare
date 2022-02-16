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
    // this.fileService.getAllPhotos().subscribe(data=> {// GET: list des photos
    //   // for (let i = 0; i < data.length; i++) {
    //   for (let i = data.length-1; i > 0; i--) {
    //     this.imageData = [...this.imageData, {url:data[i].url,name:data[i].name,comment:data[i].comment}];
    //   }
    // })
    this.fileService.getAllPosts().subscribe(data=> {// GET: list des photos  
      for (let i = 0; i < data.length; i++) {
        this.postData = [...this.postData, {id:data[i].id,comment:data[i].comment,path:data[i].postpath,url:"http://localhost:8080/files/"+data[i].postpath,name:data[i].postpath}];
      }
      // console.log(this.postData)
    })
  }

  patchPhotoAPI(id:number,comment:string){
    this.fileService.patchPhoto(id,comment).subscribe(data=>{
      window.location.reload();
    },
    // error => alert("Bad input")
    )
  }

  // Declaration des variables
  popupUpdate=false;
  imageData :any= [];
  postData:any=[]
  searchText: string="";
  myTempIndex:any;
  myTempurl:string="";
  myTempComment:string="";
  selectedID:number=-1;
    

  //Fonctions de modification des commentaires
  openUI(id:number){
    this.selectedID=id
    this.myTempIndex=this.getIndex(id)
    console.log(this.postData[this.myTempIndex])
    this.myTempurl=this.postData[this.myTempIndex].url;
    this.popupUpdate=true;
  }
  updateComment(inputComm:string){
    // this.postData[this.myTempIndex].comment=inputComm;
    this.patchPhotoAPI(this.selectedID,inputComm);
  }

  //Fonction de suppression de photos
  deletePhoto(id:number){
    this.fileService.deletePost(id).subscribe(data=>{
    })
    window.location.reload();
  }

  getIndex(id:number){
    
    for (let i = 0; i < this.postData.length; i++) {
      if(id==this.postData[i].id){
        return i
      }
    }
    return -1
  }
}
