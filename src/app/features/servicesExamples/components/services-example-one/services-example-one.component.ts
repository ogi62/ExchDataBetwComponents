import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/posts/post.service';

@Component({
  selector: 'app-services-example-one',
  templateUrl: './services-example-one.component.html',
  styleUrls: ['./services-example-one.component.css'],
})
export class ServicesExampleOneComponent implements OnInit {
  posts: any;

  constructor(
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((data) => {
      this.posts = data;
    })
  }
}
