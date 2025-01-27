import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private fb: FormBuilder, private auth: AuthService) { }

  registrationForm!: FormGroup;
  formDirty = false;

  ngOnInit(): void {
    this.Form();
    this.registrationForm.valueChanges.subscribe(() => this.formDirty = true);
    this.registrationForm.valueChanges.subscribe(() => this.formDirty = true);
  }

  Form() {
    this.registrationForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  Register() {
    const userData = this.registrationForm.value;
    if (this.registrationForm.valid) {
      this.auth.register(userData).subscribe({
        next: (response) => {
          console.log('Registered successfully! ',response)
        },
        error: (error) => {
          console.log('error occured during registering! ',error);
        }
      });
    }
  }
}
