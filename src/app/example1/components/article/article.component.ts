import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  showArticle = true;

  constructor() {}

  ngOnInit(): void {}

  seeArticle(event) {
    this.showArticle = event;
  }

  hideArticle(event) {
    this.showArticle = event;
  }
}
