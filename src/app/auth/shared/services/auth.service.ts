import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private af: AngularFireAuth
  ) { }

  createUser(email: string, password: string) {
    // this.af.auth.create...
    return this.af.createUserWithEmailAndPassword(email, password);
  }

  loginUser(email, password) {
    return this.af.signInWithEmailAndPassword(email, password);
  }

}
