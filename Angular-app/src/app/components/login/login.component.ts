import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { saveUserData } from '../../shared/store/userData.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Corrected to 'styleUrls' and it's an array
})

export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store,

  ) {
    this.loginForm = this.fb.group({
      email: ['demo@example.com', [Validators.required, Validators.email]],
      password: ['asdfasdfdsf', Validators.required] // can add validator pattern 
    });
  }

  get email() {
    return this.loginForm.controls['email'];
  }

  get password() {
    return this.loginForm.controls['password'];
  }

  redirectToHome() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this.saveUser(email, password);

    console.log(email, password);

    this.router.navigate(['admin']);
  }

  saveUser(email: string, password: string) {
    this.store.dispatch(saveUserData({email, password}));
  }
  
}
