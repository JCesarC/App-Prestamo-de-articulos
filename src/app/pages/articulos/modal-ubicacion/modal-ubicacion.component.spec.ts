import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUbicacionComponent } from './modal-ubicacion.component';

describe('ModalUbicacionComponent', () => {
  let component: ModalUbicacionComponent;
  let fixture: ComponentFixture<ModalUbicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalUbicacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUbicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
