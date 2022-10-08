import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {

  private apiUrl = 'https://hapi-books.p.rapidapi.com/month/2022/3';
  private options = {
    method: 'GET',
    url: 'https://hapi-books.p.rapidapi.com/month/2022/3',
    headers: {
      'X-RapidAPI-Key': '959ab1ba7dmshb9b7f55aa2ac655p17197bjsn1f7efe207b54',
      'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
    }
  };

    books$: Observable<any>;

  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': '959ab1ba7dmshb9b7f55aa2ac655p17197bjsn1f7efe207b54',
  //     'X-RapidAPI-Host': 'books17.p.rapidapi.com'
  //   }
  // };
  
  // fetch('https://books17.p.rapidapi.com/authors/8418015', options)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
   this.books$ =  this.allBooks();
  }

  allBooks(): Observable<any> {
    return this.http.get(this.apiUrl,this.options)
  }

}
