import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/features/servicesExamples/services/exampleFourService/loading.service';

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor(public loadingService: LoadingService) { }

  ngOnInit(): void {
  }

}
