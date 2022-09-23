import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'fourth-example-child',
  templateUrl: './fourth-example-child.component.html',
  styleUrls: ['./fourth-example-child.component.css']
})
export class FourthExampleChildComponent implements OnInit {
  @ViewChild('p') parRef: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  changeColor() {
    //because of bootstrap class text-primary
    this.parRef.nativeElement.className = "";
    this.parRef.nativeElement.style.color = 'black';
  }
}
