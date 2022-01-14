import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArticuloResponse } from '@app/shared/models/articulo.interface';
import { Categoria } from '@app/shared/models/categoria.interface';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Articulo } from 'api-lab/src/entity/Articulos';

@Component({
  selector: 'app-modal-edit-articulo',
  templateUrl: './modal-edit-articulo.component.html',
  styleUrls: ['./modal-edit-articulo.component.scss'],
})
export class ModalEditArticuloComponent implements OnInit {
  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ModalEditArticuloComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  estatusArray = ['DISPONIBLE', 'NO DISPONIBLE'];

  categoriasArray: Categoria[] = [];
  dataArticulo: Articulo;

  articuloInfo = this.fb.group({
    articuloCat: ['', Validators.required],
    articuloDesc: [
      '',
      Validators.compose([
        Validators.required,
        Validators.maxLength(60),
        Validators.minLength(3),
      ]),
    ],
    articuloCodigo: [
      '',
      Validators.compose([
        Validators.required,
        Validators.maxLength(60),
        Validators.minLength(3),
      ]),
    ],
    articuloStock: [
      '',
      Validators.compose([
        Validators.required,
        Validators.min(1),
        Validators.max(100),
      ]),
    ],
    articuloEstatus: ['', Validators.required],
  });

  ngOnInit(): void {
    this.categoriasArray = this.data.categorias;
    this.dataArticulo = this.data.dataArticulo;
    console.log(this.dataArticulo);
    console.log(this.categoriasArray);

    this.articuloInfo.get('articuloCat').setValue(this.dataArticulo.Categoria);
    this.articuloInfo
      .get('articuloDesc')
      .setValue(this.dataArticulo.Descripcion);
    this.articuloInfo.get('articuloCodigo').setValue(this.dataArticulo.Codigo);
    this.articuloInfo.get('articuloStock').setValue(this.dataArticulo.Stock);
    this.articuloInfo
      .get('articuloEstatus')
      .setValue(this.dataArticulo.Estatus);
  }

  updateArticulo() {
    let Categoria = this.articuloInfo.get('articuloCat').value;
    let Descripcion = this.articuloInfo.get('articuloDesc').value;
    let Codigo = this.articuloInfo.get('articuloCodigo').value;
    let Stock = this.articuloInfo.get('articuloStock').value;
    let Estatus = this.articuloInfo.get('articuloEstatus').value;

    let articuloUpd: ArticuloResponse = {
      Descripcion: Descripcion,
      Estatus: Estatus,
      Codigo: Codigo,
      Stock: Stock,
      Categoria: Categoria,
    };

    console.log(articuloUpd);
    this.dialogRef.close(articuloUpd);
  }
  compareObjects(o1: any, o2: any): boolean {
    return o1.Descripcion === o2.Descripcion && o1.id === o2.id;
  }
}
