import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FourthExampleChildComponent } from './components/fourth-example-child/fourth-example-child.component';

@Component({
  selector: 'fourth-example',
  templateUrl: './fourth-example.component.html',
  styleUrls: ['./fourth-example.component.css']
})
export class FourthExampleComponent implements OnInit {
  @ViewChild(FourthExampleChildComponent) pRef;
  parentText: string;

  constructor() { }

  ngOnInit(): void {
  }

  sendPfromChildToParent() {
    this.pRef.changeColor();
    this.parentText = this.pRef.parRef.nativeElement.innerText;
    // this.pRef.parRef.nativeElement.innerText = '';
  }

}
