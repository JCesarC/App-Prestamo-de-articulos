import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllArticulosComponent } from './all-articulos.component';

describe('AllArticulosComponent', () => {
  let component: AllArticulosComponent;
  let fixture: ComponentFixture<AllArticulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllArticulosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
