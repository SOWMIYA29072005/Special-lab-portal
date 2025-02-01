import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  constructor(private router: Router) { }

  
  onSubmit() {
    // Simulate successful login
    this.router.navigate(['/dashboard']);
  }

  onFacultySignIn() {
    // Handle faculty sign-in logic here
    this.router.navigate(['/faculty']);
  }

  onAdminSignIn() {
    // Handle admin sign-in logic here
    this.router.navigate(['/admin']);
  }
}
