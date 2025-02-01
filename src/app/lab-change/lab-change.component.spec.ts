import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabChangeComponent } from './lab-change.component';

describe('LabChangeComponent', () => {
  let component: LabChangeComponent;
  let fixture: ComponentFixture<LabChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LabChangeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
