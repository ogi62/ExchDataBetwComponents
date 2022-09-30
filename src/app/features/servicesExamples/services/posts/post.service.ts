import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from 'src/app/shared/models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  //1.pokusaj
  // getPosts() {
  //   return this.http.get(this.url);
  // }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url);
  }
}
