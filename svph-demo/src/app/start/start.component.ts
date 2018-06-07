import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
	password: any;
	email: any;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }
  onLogin(){
  	this.authService.loggedin = true;
        this.authService.employee = false;
        this.authService.admin = false;

  }
  onRegister(){
  console.log("hello");
  	this.router.navigate(['/register']);
  }

}
