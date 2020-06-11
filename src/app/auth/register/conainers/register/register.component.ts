import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/auth/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  error: string;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  async registerUser(event: FormGroup) {
    console.log(event.value);
    const { email, password } = event.value;
    try {
      await this.authService.createUser(email, password);
    } catch (err) {
      this.error = err.message;
    }
  }

}
