import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditArticuloComponent } from './modal-edit-articulo.component';

describe('ModalEditArticuloComponent', () => {
  let component: ModalEditArticuloComponent;
  let fixture: ComponentFixture<ModalEditArticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditArticuloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
