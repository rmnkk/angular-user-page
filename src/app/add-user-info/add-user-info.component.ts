import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

import { UsersService } from '../users.service';

@Component({
  selector: 'app-add-user-info',
  templateUrl: './add-user-info.component.html',
  styleUrls: ['./add-user-info.component.css']
})
export class AddUserInfoComponent implements OnInit {
  userInfoForm;
  logged;


  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
  ) {
    this.userInfoForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)] ],
      lastName: ['', [Validators.required, Validators.minLength(2)] ],
      userName: ['', [Validators.required, Validators.minLength(2)] ],
      phone: ['', [Validators.required, Validators.minLength(2)] ],
      email: ['', [Validators.required, Validators.minLength(2)] ],
      password: ['', [Validators.required, Validators.minLength(2)] ],
    });
  }

  ngOnInit(): void {
  }

  addUser(userData): void {
    this.usersService.addUser(userData);
    console.log(this.usersService.user);
    this.userInfoForm.reset();
  }
}
