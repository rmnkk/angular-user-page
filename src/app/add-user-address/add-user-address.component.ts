import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { UsersService } from '../users.service';

@Component({
  selector: 'app-add-user-address',
  templateUrl: './add-user-address.component.html',
  styleUrls: ['./add-user-address.component.css']
})
export class AddUserAddressComponent implements OnInit {
  userAddressForm;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
  ) {
    this.userAddressForm = this.formBuilder.group({
      addressType: ['', [Validators.required, Validators.minLength(2)] ],
      address: ['', [Validators.required, Validators.minLength(2)] ],
      city: ['', [Validators.required, Validators.minLength(2)] ],
      postalCode: ['', [Validators.required, Validators.minLength(2)] ],
    });
  }

  ngOnInit(): void {
  }

  addUserToList(userData): void {
    this.usersService.addToUsersList(userData);
    this.userAddressForm.reset();
  }

}
