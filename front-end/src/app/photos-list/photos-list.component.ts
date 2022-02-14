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

  patchPhotoAPI(id:number,comment:string){
    this.fileService.patchPhoto(id,comment).subscribe(data=>{
      window.location.reload();
    },
    // error => alert("Bad input")
    )
  }

  // Declaration des variables
  popupUpdate=false;
  imageData :any= [
    {
      url:"https://upload.wikimedia.org/wikipedia/commons/4/45/Wide_lightning.jpg",
      name:"toto.jpg",
      comment:"C'est large"
    },
    {
      url:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/OCR-A_char_Long_Vertical_Mark.svg/1200px-OCR-A_char_Long_Vertical_Mark.svg.png",
      name:"greg.jpg",
      comment:"C'est long"
    },    {
      url:"https://www.telecom-st-etienne.fr/intranet/photos/2019_gagnaire_thomas.jpg",
      name:"toto.jpg",
      comment:"C'est Toto"
    },
    {
      url:"https://www.telecom-st-etienne.fr/intranet/photos/2019_biron_gregoire.jpg",
      name:"greg.jpg",
      comment:"C'est greg"
    },
  ];
  searchText: string="";
  myTempIndex:number=-1;
  myTempurl:string="";
  myTempComment:string="";
    

  //Fonctions de modification des commentaires
  updateIndex(index:number){
    this.myTempIndex=index;
    this.myTempurl=this.imageData[this.myTempIndex].url;
    // console.log(this.myTempIndex);
    this.popupUpdate=true;
  }
  updatePhoto(inputComment:string){
    this.imageData[this.myTempIndex].comment=inputComment;
    this.patchPhotoAPI(this.myTempIndex,inputComment);
    // this.myTempComment="";
  }

  //Fonction de suppression de photos
  deletePhoto(i:number){
    this.fileService.deletePhoto(this.imageData[i].name).subscribe(data=>{
    })
    window.location.reload()
  }

  // saveCommentaire(id:number,comment:string) {
  //   this.patchPhotoAPI(id,comment);
  // }
}
