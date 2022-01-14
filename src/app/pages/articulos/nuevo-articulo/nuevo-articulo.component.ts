import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Categoria } from '@app/shared/models/categoria.interface';
import { ArticuloService } from '../articulo.service';
import { CategoriaService } from '../categoria.service';
import Swal from 'sweetalert2';
import { ArticuloResponse } from '@app/shared/models/articulo.interface';

@Component({
  selector: 'app-nuevo-articulo',
  templateUrl: './nuevo-articulo.component.html',
  styleUrls: ['./nuevo-articulo.component.scss'],
})
export class NuevoArticuloComponent implements OnInit {
  constructor(
    private artSvc: ArticuloService,
    private fb: FormBuilder,
    private catSvc: CategoriaService
  ) {}

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

  categoriasArray: Categoria[] = [];
  estatusArray = ['DISPONIBLE', 'NO DISPONIBLE'];


  ngOnInit(): void {
    this.getAllCategorias();
  }

  async getAllCategorias() {
    let res = await this.catSvc.getAll().toPromise();
    if (res) {
      this.categoriasArray = res;
    }
  }
  async saveArticulo() {
    
      let Categoria = this.articuloInfo.get('articuloCat').value;
      let Descripcion = this.articuloInfo.get('articuloDesc').value;
      let Codigo = this.articuloInfo.get('articuloCodigo').value;
      let Stock = this.articuloInfo.get('articuloStock').value;
      let Estatus = this.articuloInfo.get('articuloEstatus').value;

      let newArticulo: ArticuloResponse = {
        Descripcion: Descripcion,
        Estatus: Estatus,
        Codigo: Codigo,
        Stock: Stock,
        Categoria: Categoria,
      };
      console.log(newArticulo);

      let result  = await this.artSvc.newArticulo(newArticulo).toPromise();

      if(result){
        this.showConfirmado(result.message);
      }

  }
  showConfirmado(text: string) {
    Swal.fire({
      icon: 'success',
      title: text,
      didClose: this.reloadPage,
      showConfirmButton: true,
    });
  }
  reloadPage() {
    window.location.reload();
  }
}
