import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';

import {routing} from "./app.routing";

@NgModule({
  imports:      [ BrowserModule, FormsModule,routing,ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, LoginComponent, AddUserComponent, ListUserComponent, EditUserComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
