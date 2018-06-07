import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
	loggedin = false;
	employee = false;
	admin = false;
  constructor() { }
}
