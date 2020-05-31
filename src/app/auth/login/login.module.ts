import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  { path: '', component: LoginComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
