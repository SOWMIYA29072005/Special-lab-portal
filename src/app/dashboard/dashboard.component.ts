import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private router: Router) { }

  isNotificationDropdownOpen = false;
  isProfileDropdownOpen = false;

  toggleDropdown(type: string) {
    if (type === 'notification') {
      this.isNotificationDropdownOpen = !this.isNotificationDropdownOpen;
      this.isProfileDropdownOpen = false; // Close profile dropdown if open
    } else if (type === 'profile') {
      this.isProfileDropdownOpen = !this.isProfileDropdownOpen;
      this.isNotificationDropdownOpen = false; // Close notification dropdown if open
    }
  }

  signOut() {
    // Add your sign-out logic here
    console.log("Signing out...");
  }
  navigateToEnroll() {
    this.router.navigate(['/enroll']);
  }
  navigateToHome(){
    this.router.navigate(['/home']);
  }
  navigateToWildcard(){
    this.router.navigate(['/wildcard-entry']);
  }
  navigateToSpecialCase(){
    this.router.navigate(['/special-case']);
  }
  navigateToLabChange(){
    this.router.navigate(['/lab-change']);
  }
  navigateToPortfolio(){
    this.router.navigate(['/portfolio']);
  }
}
