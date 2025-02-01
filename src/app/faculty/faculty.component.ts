import { Component } from '@angular/core';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrl: './faculty.component.css'
})
export class FacultyComponent {
  inactiveStudents = [
    { name: 'John Doe' },
    { name: 'Jane Smith' },
    { name: 'Mark Johnson' }
  ];

  appointments = [
    { date: '2024-09-01', time: '10:00 AM', student: 'Alice Brown' },
    { date: '2024-09-01', time: '11:00 AM', student: 'Bob White' }
  ];

  proofs = [
    { student: 'Charlie Green', description: 'Special Enrollment Proof 1' },
    { student: 'David Blue', description: 'Special Enrollment Proof 2' }
  ];

  studentsProgress = [
    { student: 'Eve Pink', percentage: 70 },
    { student: 'Frank Red', percentage: 85 }
  ];

  approveProof(proof: any) {
    // Logic to approve proof goes here
    alert(`Approved proof for ${proof.student}`);
  }
}
