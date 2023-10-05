import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiInputModule, TuiIslandModule } from '@taiga-ui/kit';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  TuiButtonModule,
  TuiHintModule,
  TuiNotificationModule,
} from '@taiga-ui/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    TuiInputModule,
    ReactiveFormsModule,
    TuiIslandModule,
    TuiButtonModule,
    TuiHintModule,
    TuiNotificationModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  testEmail = 'mail@mail.ru';
  testPassword = 'AAaa11!!';
  isSucces = false;
  readonly loginForm = new FormGroup({
    login: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  constructor(
    public auth: AuthService,
    private router: Router
  ) {}

  login() {
    if (
      this.loginForm.value.login === this.testEmail &&
      this.loginForm.value.password === this.testPassword
    ) {
      this.auth.isLogin = true;
      setTimeout(() => this.router.navigate(['/']), 1000);
    } else {
      this.isSucces = true;
      setTimeout(() => (this.isSucces = false), 2000);
    }
  }
}
