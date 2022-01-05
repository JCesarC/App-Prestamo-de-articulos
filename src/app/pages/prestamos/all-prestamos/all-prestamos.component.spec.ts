import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPrestamosComponent } from './all-prestamos.component';

describe('AllPrestamosComponent', () => {
  let component: AllPrestamosComponent;
  let fixture: ComponentFixture<AllPrestamosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPrestamosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPrestamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
