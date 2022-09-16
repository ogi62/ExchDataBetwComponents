import { Component, ElementRef, ViewChild } from '@angular/core';
import { GalleryChildComponent } from '../galleryChild/galleryChild.component';

@Component({
  selector: 'parent-app',
  templateUrl: './parentApp.component.html',
  styleUrls: ['./parentApp.component.scss'],
})
export class ParentAppComponent {
  @ViewChild(GalleryChildComponent) gallery;
  

  constructor() {}

  addImg() {
    if (this.gallery.pictures.length === 10) {
      alert('to many images');
      return;
    }
    const img = this.gallery.generateImg();
    this.gallery.pictures.unshift(img);
  }

  removeFirstImg() {
    if (this.gallery.pictures.length === 0) {
      alert('no images');
      return;
    }

    this.gallery.pictures.shift();
  }
}
