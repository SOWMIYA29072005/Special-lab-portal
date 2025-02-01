import { Component } from '@angular/core';

@Component({
  selector: 'app-lab-change',
  templateUrl: './lab-change.component.html',
  styleUrl: './lab-change.component.css'
})
export class LabChangeComponent {
  bookSlot(){
    alert(`Submitted successfully`);
  }
}
