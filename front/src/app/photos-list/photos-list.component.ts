import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {
  constructor() {}
  ngOnInit() {
  }
  // Declaration des variables
  popupUpdate=false;
  imageData = data;
  searchText: string="";
  myTempIndex:number=-1;
  myTempComment:string="";

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
    console.log("delete works!");
    this.imageData.splice(i, 1);
  }
}

const data = [
  {
    srcUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg',
    comment: "yeet"
  },
  {
    srcUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
    comment: "jaaaj"
  },
  {
    srcUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg',
    comment: "showdown"
  },
  {
    srcUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg',
    comment: "j'aime le gluten"
  }
];

