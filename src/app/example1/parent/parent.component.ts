import { Component } from '@angular/core';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
    name: string = 'Petar';
    old: number = 25;
    city: string = 'Belgrade';
    country: string = 'Serbia';
    petName: string;

    changePetName(pet: string) {
        this.petName = pet;
    }
}
