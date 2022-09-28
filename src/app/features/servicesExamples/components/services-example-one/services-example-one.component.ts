import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/shared/models/post.model';
import { PostService } from '../../services/posts/post.service';

@Component({
  selector: 'app-services-example-one',
  templateUrl: './services-example-one.component.html',
  styleUrls: ['./services-example-one.component.css'],
})
export class ServicesExampleOneComponent implements OnInit {
  //1.pokusaj
  // posts: any;
    posts$: Observable<Post[]>;

  constructor(
    private postService: PostService
  ) {}

  //1.pokusaj
  // ngOnInit(): void {
  //   this.postService.getPosts().subscribe((data) => {
  //     console.log(data);
  //     this.posts = data;
  //   })
  // }
  ngOnInit(): void {
    this.posts$ = this.postService.getPosts();
  }
}
