/**
 * añadir modal de edit ubicaciones
 * consumir servicios de ubicacacinService
 * Corregir error de deletePrestamo
 *
 */

import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import {
  Categoria,
  CategoriaResponse,
} from '@app/shared/models/categoria.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { CategoriaService } from '../categoria.service';
import { ModalCategoriaComponent } from '../modal-categoria/modal-categoria.component';
import {
  Ubicacion,
  UbicacionResponse,
} from '../../../shared/models/ubicacion.interface';
import { UbicacionService } from '../ubicacion.service';
import { ModalUbicacionComponent } from '../modal-ubicacion/modal-ubicacion.component';

@Component({
  selector: 'app-operaciones-articulo',
  templateUrl: './operaciones-articulo.component.html',
  styleUrls: ['./operaciones-articulo.component.scss'],
})
export class OperacionesArticuloComponent implements OnInit, AfterViewInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  categoriasArray: Categoria[] = [];
  ubicacionesArray: Ubicacion[] = [];
  categoriaInfo = this.fb.group({
    catDescripcion: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(60),
      ]),
    ],
  });

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

  constructor(
    private catSvc: CategoriaService,
    private fb: UntypedFormBuilder,
    private modalService: NgbModal,
    private ubicacionSvc: UbicacionService
  ) {}

  ngOnInit(): void {
    this.getCategorias();
    this.getUbicaciones();
  }

  ngAfterViewInit(): void {
    this.accordion.openAll();
  }

  async getCategorias() {
    let res = await this.catSvc.getAll().toPromise();
    if (res) {
      this.categoriasArray = res;
      console.log(res);
    }
  }
  async getUbicaciones() {
    let res = await this.ubicacionSvc.getAll().toPromise();
    if (res) {
      this.ubicacionesArray = res;
      console.log(res);
    }
  }
  async saveCategoria() {
    console.log('nueva categoria a guardar');

    let descripcion = this.categoriaInfo.get('catDescripcion').value;
    let categoria: CategoriaResponse = {
      descripcion: descripcion,
    };

    let res = await this.catSvc.newCategoria(categoria).toPromise();
    if (res) {
      this.showConfirmado(res.message);
      this.categoriaInfo.get('catDescripcion').setValue('');
      await this.getCategorias();
    }
  }

  async saveUbicacion() {
    console.log('executed saveUbicacion');
    let descripcion = this.ubicacionInfo.get('ubiDescripcion').value;
    let ubicacion: UbicacionResponse = {
      Descripcion: descripcion,
    };

    let res = await this.ubicacionSvc.newUbicacion(ubicacion).toPromise();
    if (res) {
      this.showConfirmado(res.message);
      this.ubicacionInfo.get('ubiDescripcion').setValue('');
      await this.getUbicaciones();
    }
  }
  async editCategoria(element: Categoria) {
    const modalRef = this.modalService.open(ModalCategoriaComponent, {
      scrollable: true,
      size: 'lg',
    });

    modalRef.componentInstance.dataCategoria = element;
    modalRef.result.then(async (result: CategoriaResponse) => {
      if (result) {
        console.log(result);
        let res = await this.catSvc
          .updateCategoria(element.id, result)
          .toPromise();
        if (res) {
          this.showConfirmado(res.message);
          await this.getCategorias();
        }
      }
    });
  }

  async editUbicacion(element: Ubicacion) {
    const modalRef = this.modalService.open(ModalUbicacionComponent, {
      scrollable: true,
      size: 'lg',
    });

    modalRef.componentInstance.dataCategoria = element;
    modalRef.result.then(async (result: UbicacionResponse) => {
      if (result) {
        console.log(result);
        let res = await this.ubicacionSvc
          .updateUbicacion(element.id, result)
          .toPromise();
        if (res) {
          this.showConfirmado(res.message);
          await this.getUbicaciones();
        }
      }
    });
  }
  async deleteCategoria(element: Categoria) {
    console.log('Se debe eliminar una categoria');
    let res = await this.catSvc.deleteCategoria(element.id).toPromise();
    if (res) {
      this.showConfirmado(res.message);
      await this.getCategorias();
    }
  }

  async deleteUbicacion(element: Ubicacion) {
    console.log('Se debe eliminar una ubicacion');
    let res = await this.ubicacionSvc.deleteUbicacion(element.id).toPromise();
    if (res) {
      this.showConfirmado(res.message);
      await this.getUbicaciones();
    }
  }

  showConfirmado(text: string) {
    Swal.fire({
      icon: 'success',
      title: text,
      showConfirmButton: true,
    });
  }
}
