import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  logged;

  constructor(
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
    this.logged = this.loginService.logged;
  }

  logout(): void {
    this.loginService.logout();
    this.logged = this.loginService.logged;
  }

}
