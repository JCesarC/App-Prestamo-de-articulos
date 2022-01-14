import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import {
  Categoria,
  CategoriaResponse,
} from '@app/shared/models/categoria.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { CategoriaService } from '../categoria.service';
import { ModalCategoriaComponent } from '../modal-categoria/modal-categoria.component';

@Component({
  selector: 'app-operaciones-articulo',
  templateUrl: './operaciones-articulo.component.html',
  styleUrls: ['./operaciones-articulo.component.scss'],
})
export class OperacionesArticuloComponent implements OnInit, AfterViewInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  categoriasArray: Categoria[] = [];
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

  constructor(
    private catSvc: CategoriaService,
    private fb: FormBuilder,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.getCategorias();
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
  saveCategoria() {}
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
  deleteCategoria(element: Categoria) {}

  showConfirmado(text: string) {
    Swal.fire({
      icon: 'success',
      title: text,
      showConfirmButton: true,
    });
  }
}
