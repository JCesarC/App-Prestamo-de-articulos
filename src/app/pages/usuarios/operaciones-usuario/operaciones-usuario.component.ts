import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { Rol, rolResponse } from '@app/shared/models/rol.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { ModalRolComponent } from '../modal-rol/modal-rol.component';
import { RolService } from '../rol.service';

@Component({
  selector: 'app-operaciones-usuario',
  templateUrl: './operaciones-usuario.component.html',
  styleUrls: ['./operaciones-usuario.component.scss'],
})
export class OperacionesUsuarioComponent implements OnInit, AfterViewInit {
  constructor(
    private rolSvc: RolService,
    private fb: UntypedFormBuilder,
    private modalService: NgbModal
  ) {}

  @ViewChild(MatAccordion) accordion: MatAccordion;

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

  rolsArray: Rol[] = [];

  ngOnInit(): void {
    this.getRols();
  }
  ngAfterViewInit(): void {
    this.accordion.openAll();
  }

  async getRols() {
    let res = await this.rolSvc.getAll().toPromise();
    if (res) {
      this.rolsArray = res;
    }

    await this.accordion.openAll();
  }
  async saveRol() {
    let descripcion = this.rolInfo.get('rolDescripcion').value;
    let rol: rolResponse = {
      rol: descripcion,
    };

    let res = await this.rolSvc.newRol(rol).toPromise();
    if (res) {
      this.showConfirmado(res.message);
      this.rolInfo.get('rolDescripcion').setValue('');
      await this.getRols();
    }
  }

  showConfirmado(text: string) {
    Swal.fire({
      icon: 'success',
      title: text,
      showConfirmButton: true,
    });
  }
  async editRol(rol: Rol) {
    const modalRef = this.modalService.open(ModalRolComponent, {
      scrollable: true,
      size: 'lg',
    });

    modalRef.componentInstance.dataRol = rol;
    modalRef.result.then(async (result: rolResponse) => {
      if (result) {
        console.log(result);
        let res = await this.rolSvc.updateRol(rol.id, result).toPromise();
        if (res) {
          this.showConfirmado(res.message);
          await this.getRols();
        }
      }
    });
  }
  async deleteRol(rol: Rol) {
    let res = await this.rolSvc.deleteRol(rol.id).toPromise();
    if (res) {
      this.showConfirmado(res.message);
      
      await this.getRols();
    }
  }
}
