import { Component } from '@angular/core';

@Component({
    selector: 'parentCount',
    templateUrl: './parentCount.component.html',
    styleUrls: ['./parentCount.component.scss']
})

export class ParentCountComponent {
     countNumber = 10;
     outputNum = 0;

     increaseParentNumber(num: number) {
        this.outputNum = num;
     }
}