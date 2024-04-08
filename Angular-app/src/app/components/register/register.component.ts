import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

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
    private router: Router
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
    const postData = {...this.registerForm.value};
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Your account has been created successfully' });
    this.router.navigate(['login'])
  }


}
