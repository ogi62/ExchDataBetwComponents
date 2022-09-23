import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'button-example',
  templateUrl: './button-example.component.html',
  styleUrls: ['./button-example.component.css']
})
export class ButtonExampleComponent implements OnInit {
  showModal = false;
  @ViewChild('mainBtn') modalEl: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  openModal() {
    this.showModal = true;
    this.modalEl.nativeElement.disabled = true;
  }

  closeModal() {
    this.showModal= false;
    this.modalEl.nativeElement.disabled = false;
  }

  hideBtn() {
    console.log(this.modalEl)
    this.modalEl.nativeElement.hidden = true;
    this.showModal = false;
  }

}
