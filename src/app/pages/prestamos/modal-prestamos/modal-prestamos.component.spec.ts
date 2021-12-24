import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPrestamosComponent } from './modal-prestamos.component';

describe('ModalPrestamosComponent', () => {
  let component: ModalPrestamosComponent;
  let fixture: ComponentFixture<ModalPrestamosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPrestamosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPrestamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
