import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'gallery-child',
    templateUrl: './galleryChild.component.html',
    styleUrls: ['./galleryChild.component.scss']
})

export class GalleryChildComponent implements OnInit {
    pictures: string[] = [];

    constructor() {}

    ngOnInit() {
        this.pictures = new Array(5).fill(0).map(this.generateImg);
    }

    generateImg() {
        return `https://picsum.photos/200/200?ts${Math.random()*30 + 1}`;
    }
}