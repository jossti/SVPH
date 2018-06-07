import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	tab = "start";
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logOut(){
  this.authService.loggedin = false;
  this.authService.employee = false;
  this.authService.admin = false;

  }
}
