import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { Input } from '@angular/core';
import { Ubicacion } from '@app/shared/models/ubicacion.interface';
import { UbicacionResponse } from '../../../shared/models/ubicacion.interface';

@Component({
  selector: 'app-modal-ubicacion',
  templateUrl: './modal-ubicacion.component.html',
  styleUrls: ['./modal-ubicacion.component.scss'],
})
export class ModalUbicacionComponent implements OnInit {
  @Input() public dataUbicacion: Ubicacion;
  ubicacionInfo = this.fb.group({
    ubiDescripcion: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(60),
      ]),
    ],
  });

  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.ubicacionInfo
      .get('ubiDescripcion')
      .setValue(this.dataUbicacion.Descripcion);
  }

  updateUbicacion() {
    let ubiUpd: UbicacionResponse = {
      Descripcion: this.ubicacionInfo.get('ubiDescripcion').value,
    };
    this.activeModal.close(ubiUpd);
  }
}
