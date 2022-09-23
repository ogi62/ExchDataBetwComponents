import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: 'child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  @Input() name: string;
  @Input() old: number;
  @Input() cityName: string;
  @Input() countryName: string;
  @Output() petName = new EventEmitter<string>();

  childChangePetName(pet: string) {
    if(!pet) {
        return;
    }
    this.petName.emit(pet);
  }

  clearPetName(pet) {
    pet.value = '';
    this.petName.emit('');
  }
}
