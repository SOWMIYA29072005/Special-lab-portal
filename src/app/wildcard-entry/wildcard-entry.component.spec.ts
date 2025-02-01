import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildcardEntryComponent } from './wildcard-entry.component';

describe('WildcardEntryComponent', () => {
  let component: WildcardEntryComponent;
  let fixture: ComponentFixture<WildcardEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WildcardEntryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WildcardEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
