import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarPrestamoComponent } from './confirmar-prestamo.component';

describe('ConfirmarPrestamoComponent', () => {
  let component: ConfirmarPrestamoComponent;
  let fixture: ComponentFixture<ConfirmarPrestamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmarPrestamoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmarPrestamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
