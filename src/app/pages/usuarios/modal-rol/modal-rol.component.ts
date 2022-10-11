import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { rolResponse } from '@app/shared/models/rol.interface';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Rol } from 'api-lab/src/entity/Rols';

@Component({
  selector: 'app-modal-rol',
  templateUrl: './modal-rol.component.html',
  styleUrls: ['./modal-rol.component.scss'],
})
export class ModalRolComponent implements OnInit {
  @Input() public dataRol: Rol;

  constructor(public activeModal: NgbActiveModal, private fb: UntypedFormBuilder) {}

  rolInfo = this.fb.group({
    rolDescripcion: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(60),
      ]),
    ],
  });

  ngOnInit(): void {
    this.rolInfo.get('rolDescripcion').setValue(this.dataRol.rol);
  }
  updateRol() {
    let rolUpd: rolResponse = {
      rol: this.rolInfo.get('rolDescripcion').value,
    };
    this.activeModal.close(rolUpd);
  }
}
