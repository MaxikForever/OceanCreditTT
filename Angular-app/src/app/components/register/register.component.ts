import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from '../../interfaces/auth';
import { UserService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})

export class RegisterComponent {
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private router: Router,
    private UserService: UserService
  ) {
    this.registerForm = this.fb.group(
      {
        lastName: ['', [Validators.required]],
        firstName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
      }
    )
  }

  get firstName() {
    return this.registerForm.controls['firstName'];
  }

  get lastName() {
    return this.registerForm.controls['lastName'];
  }

  get email() {
    return this.registerForm.controls['email'];
  }


  submitDetails() {

   this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
    const posData = { ...this.registerForm.value };

    const userData: User = {
      firstName: posData.firstName,
      lastName: posData.lastName,
      email: posData.email
    };

    this.UserService.saveUser(userData);

    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Your account has been created successfully' });
    this.router.navigate(['login']);

    console.log(userData);
  }


}
