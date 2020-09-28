import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users = JSON.parse(localStorage.getItem('users')) || [];
  user = {};

  constructor() { }

  addUser(user): void {
    this.user = {
      ...this.user,
      ...user
    };
  }

  getUsers(): void {
    return this.users;
  }

  addToUsersList(userAddress): void {
    this.users = [...this.users, {
      ...this.user,
      ...userAddress,
    }];

    localStorage.setItem('users', JSON.stringify(this.users));
  }

  updateUser(): void {
    this.users.map(user => user);
  }
}
