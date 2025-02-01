import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  inactiveStudents = [
    { name: 'John Doe' },
    { name: 'Jane Smith' },
    { name: 'Mark Johnson' }
  ];

  labs = [
    { name: 'Computer Science Lab', vacantSeats: 5 },
    { name: 'Electronics Lab', vacantSeats: 2 },
    { name: 'Mechanical Lab', vacantSeats: 8 }
  ];

  interviews = [
    { company: 'Tech Solutions Inc.', status: 'Ongoing', date: '2024-09-02' },
    { company: 'Innovatech', status: 'Completed', date: '2024-08-29' },
    { company: 'FutureCorp', status: 'Upcoming', date: '2024-09-05' }
  ];
}
