import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessdetailsComponent } from './processdetails.component';

describe('ProcessdetailsComponent', () => {
  let component: ProcessdetailsComponent;
  let fixture: ComponentFixture<ProcessdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
