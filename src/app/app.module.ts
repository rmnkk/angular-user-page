import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {RouterModule} from '@angular/router';
import { SearchUserComponent } from './search-user/search-user.component';
import { AddUserInfoComponent } from './add-user-info/add-user-info.component';
import { HomeComponent } from './home/home.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AddUserAddressComponent } from './add-user-address/add-user-address.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserAddressComponent } from './user-address/user-address.component';
import { CreateUserComponent } from './create-user/create-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchUserComponent,
    AddUserInfoComponent,
    HomeComponent,
    AddUserAddressComponent,
    UserInfoComponent,
    UserAddressComponent,
    CreateUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'user', component: SearchUserComponent},
      {path: 'create', component: CreateUserComponent},
      {path: 'create/address', component: AddUserAddressComponent}
    ]),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
