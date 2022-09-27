import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/app/shared/models/course.model';
import { ProductsExampleThreeService } from '../../services/products-example-three.service';

@Component({
  selector: 'app-services-example-three',
  templateUrl: './services-example-three.component.html',
  styleUrls: ['./services-example-three.component.css']
})
export class ServicesExampleThreeComponent implements OnInit {
  courses$ : Observable<Course[]>;

  constructor(private productsExampleThreeService: ProductsExampleThreeService) { }

  ngOnInit(): void {
   this.courses$ = this.productsExampleThreeService.loadAllCourses();
  }

  

}
