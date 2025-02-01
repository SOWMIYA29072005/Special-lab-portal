import { Component } from '@angular/core';

@Component({
  selector: 'app-special-case',
  templateUrl: './special-case.component.html',
  styleUrl: './special-case.component.css'
})
export class SpecialCaseComponent {
  student = {
    name: '',
    rollNo: '',
    email: '',
    startDate: '',
    endDate: '',
    selectedLab: ''
  };

  labs = [
    { name: 'Cloud Computing Lab', code: 'CC101', faculty: 'Dr. Smith' },
    // Add more lab options here
  ];

  validationStatus: string = 'Pending';
  
  get leaveDuration(): number {
    const startDate = new Date(this.student.startDate);
    const endDate = new Date(this.student.endDate);
    return (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);
  }

  submitProof() {
    // Logic to submit proof
  }

  register() {
    // Logic to register the special case enrollment
  }

  bookSlot(){
    alert(`Registered successfully`);
  }
}
