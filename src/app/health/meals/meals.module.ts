import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { MealsComponent } from './containers/meals/meals.component';
import { SharedModule } from 'src/app/auth/shared/shared.module';
import { MealComponent } from './containers/meal/meal.component';

const ROUTES: Routes = [
  { path: '', component: MealsComponent },
  { path: 'new', component: MealComponent },
];

@NgModule({
  declarations: [
    MealComponent,
    MealsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
  ]
})
export class MealsModule { }
