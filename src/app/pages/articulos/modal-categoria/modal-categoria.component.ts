import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  Categoria,
  CategoriaResponse,
} from '@app/shared/models/categoria.interface';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-categoria',
  templateUrl: './modal-categoria.component.html',
  styleUrls: ['./modal-categoria.component.scss'],
})
export class ModalCategoriaComponent implements OnInit {
  @Input() public dataCategoria: Categoria;
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

  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.categoriaInfo
      .get('catDescripcion')
      .setValue(this.dataCategoria.Descripcion);
  }

  updateCategoria() {
    let catUpd: CategoriaResponse = {
      descripcion: this.categoriaInfo.get('catDescripcion').value,
    };

    this.activeModal.close(catUpd);
  }
}
