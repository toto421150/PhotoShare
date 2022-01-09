import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-diapo',
  templateUrl: './diapo.component.html',
  styleUrls: ['./diapo.component.css']
})
export class DiapoComponent implements OnInit {
  constructor(public gallery: Gallery, public lightbox: Lightbox) {
  }
  items: GalleryItem[]= [];
  imageData = data;
  ngOnInit() {
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
  }
}

const data = [
  {
    srcUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg',
  },
  {
    srcUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
  },
  {
    srcUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg',
  },
  {
    srcUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg',
  }
];