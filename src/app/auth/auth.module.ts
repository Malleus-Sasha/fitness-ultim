import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule, FirebaseAppConfig } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { SharedModule } from './shared/shared.module';

export const ROUTES: Routes = [
  {
    path: 'auth',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
      { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
    ]
  }
];

export const firebaseConfig: FirebaseAppConfig = {
  apiKey: 'AIzaSyBIxYyOx3vkf8BwaKh5jmurbPgRBlzU-zE',
  authDomain: 'fitness-ultim.firebaseapp.com',
  databaseURL: 'https://fitness-ultim.firebaseio.com',
  projectId: 'fitness-ultim',
  storageBucket: 'fitness-ultim.appspot.com',
  messagingSenderId: '278019028853',
  appId: '1:278019028853:web:2ded69c987d4266973053c'
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    SharedModule
  ]
})
export class AuthModule { }
