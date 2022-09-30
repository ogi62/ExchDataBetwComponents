import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LoadingService {

    private subject = new BehaviorSubject<boolean>(false);
    loading$ = this.subject.asObservable();

    constructor() {}

    loadingOn() {
        this.subject.next(true);
    }

    loadingOff() {
        this.subject.next(false);
    }
}