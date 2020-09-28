import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  logged;

  constructor(
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
    this.logged = this.loginService.logged;
  }

}
