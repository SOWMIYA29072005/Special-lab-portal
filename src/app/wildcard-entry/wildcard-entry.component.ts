import { Component } from '@angular/core';

@Component({
  selector: 'app-wildcard-entry',
  templateUrl: './wildcard-entry.component.html',
  styleUrl: './wildcard-entry.component.css'
})
export class WildcardEntryComponent {
  bookSlot(){
    alert(`Registered successfully`);
  }
}
