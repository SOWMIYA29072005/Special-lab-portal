import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrl: './enroll.component.css'
})
export class EnrollComponent {
  enrollmentForm: FormGroup;
  isModalVisible: boolean = false;

  constructor(private fb: FormBuilder) {
    this.enrollmentForm = this.fb.group({
      fullName: ['', Validators.required],
      rollNo: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      lab: ['', Validators.required],
      slot: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.enrollmentForm.valid) {
      this.isModalVisible = true; // Show the modal
      console.log('Slot has been booked successfully!');
    }
  }

  closeModal() {
    this.isModalVisible = false; // Hide the modal
  }

  bookSlot(){
    alert(`Slot booked successfully`);
  }
}
