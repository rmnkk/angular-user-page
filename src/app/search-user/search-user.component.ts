import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import {UsersService} from '../users.service';
import {LoginService} from '../login.service';


@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
  users;
  userToShow;
  findUserForm;
  logged;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private loginService: LoginService,
  ) {
    this.findUserForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      userName: '',
      phone: '',
      email: '',
    });
  }

  ngOnInit(): void {
    this.users = this.usersService.getUsers();
    this.logged = this.loginService.logged;
  }

  findUser(query): void {
    this.userToShow = this.users
      .find(user => user.firstName === query.firstName
        || user.lastName === query.lastName
        || user.userName === query.userName
        || user.phone === query.phone
        || user.email === query.email
      );
  }

}
