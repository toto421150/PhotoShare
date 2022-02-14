import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-diapo',
  templateUrl: './diapo.component.html',
  styleUrls: ['./diapo.component.css']
})
export class DiapoComponent implements OnInit {
  constructor(public gallery: Gallery, public lightbox: Lightbox,private fileService: FileService) {}

  ngOnInit() {
    this.fileService.getAllPhotos().subscribe(data=> {// GET: list des photos
      if(data.length!=0){
        for (let i = 0; i < data.length; i++) {
          if (i==0){
            this.imageData = [{srcUrl:data[i].url}];
          }else{
            this.imageData = [...this.imageData, {srcUrl:data[i].url}];
          }
        }

        // Affichage des images et de leur prévisualisation
        this.items = this.imageData.map(item => new ImageItem({ src: item.srcUrl, thumb: item.srcUrl }));
        // Lightbox pour affichage en plein ecran
        const lightboxRef = this.gallery.ref('lightbox');
        // Configuration de la lightbox
        lightboxRef.setConfig({
          imageSize: ImageSize.Contain,
          thumbPosition: ThumbnailsPosition.Top
        });
        // Chargement des images au chargement de la page
        lightboxRef.load(this.items);
      }else{
        this.empty=true;
      }


    })
  }
 
  items: GalleryItem[]= [];
  imageData = [{srcUrl: ''}];
  empty=false;
}

