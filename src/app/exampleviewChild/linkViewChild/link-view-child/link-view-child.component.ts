import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'link-view-child',
  templateUrl: './link-view-child.component.html',
  styleUrls: ['./link-view-child.component.css']
})
export class LinkViewChildComponent implements OnInit {
  @ViewChild('linkRef') linkEl:ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  changeLinkColor() {
    console.log(this.linkEl);
    this.linkEl.nativeElement.innerText = 'You clicked the button';
  }

}
