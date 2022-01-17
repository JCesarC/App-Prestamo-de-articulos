import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllReportesComponent } from './all-reportes.component';

describe('AllReportesComponent', () => {
  let component: AllReportesComponent;
  let fixture: ComponentFixture<AllReportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllReportesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
