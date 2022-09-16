import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'childCount',
    templateUrl: './childCount.component.html',
    styleUrls: ['./childCount.component.scss']
})

export class ChildCountComponent {
    @Output() count = new EventEmitter<number>();
    numCount: number = 0;
    @Input() resetNum: number;
 
    increase() {
        this.numCount++;
        this.count.emit(this.numCount);
    }

    decrease() {
        if(!this.numCount) {
            return;
        }
        this.numCount--;
        this.count.emit(this.numCount);
    }
    
    reset() {
        this.count.emit(this.resetNum);
        this.numCount = this.resetNum;
    }


}