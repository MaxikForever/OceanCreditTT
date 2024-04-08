import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from '../../interfaces/auth';
import { UserService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {

  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private router: Router,
    private UserService: UserService
  ){
    this.registerForm = this.fb.group(
      {
        lastName: ['', [Validators.required, Validators.pattern(/^[A-Za-z][A-Za-z-\s]+$/)]],
        firstName: ['', [Validators.required, Validators.pattern(/^[A-Za-z][A-Za-z-\s]+$/)]],
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
    const posData = {...this.registerForm.value};

    const userData: User = {
      firstName: posData.firstName,
      lastName:  posData.lastName,
      email: posData.email
    };

    this.UserService.saveUser(userData);

    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Your account has been created successfully' });
    this.router.navigate(['login']);

    console.log(userData);
  }


}