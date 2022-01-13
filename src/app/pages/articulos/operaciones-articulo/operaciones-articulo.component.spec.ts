import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacionesArticuloComponent } from './operaciones-articulo.component';

describe('OperacionesArticuloComponent', () => {
  let component: OperacionesArticuloComponent;
  let fixture: ComponentFixture<OperacionesArticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperacionesArticuloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacionesArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
