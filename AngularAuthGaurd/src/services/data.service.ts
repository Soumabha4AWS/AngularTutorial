import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs-compat/BehaviorSubject';

@Injectable({
	providedIn: 'root'
})


export class DataService {

	private logStatus: boolean = false;

	private messageSource = new BehaviorSubject<boolean>(this.logStatus);
	currentMessage = this.messageSource.asObservable();

	sendMessage(statusLog: boolean) {
		this.messageSource.next(statusLog);
	}


	constructor() { }
}