import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';

@Component({
  selector: 'example-one',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.scss'],
})
export class ExampleOneComponent {
  title = 'input-output';
}
