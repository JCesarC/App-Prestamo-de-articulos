import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacionesUsuarioComponent } from './operaciones-usuario.component';

describe('OperacionesUsuarioComponent', () => {
  let component: OperacionesUsuarioComponent;
  let fixture: ComponentFixture<OperacionesUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperacionesUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacionesUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
