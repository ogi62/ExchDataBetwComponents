import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'article-buttons',
  templateUrl: './article-buttons.component.html',
  styleUrls: ['./article-buttons.component.css']
})
export class ArticleButtonsComponent implements OnInit {
  @Output() showArt = new EventEmitter<boolean>();
  @Input() articleMsg: string;

  constructor() { }

  ngOnInit(): void {
  }

  showBtn() {
    this.showArt.emit(true);
  }

  hideBtn() {
    this.showArt.emit(false);
  }

}
