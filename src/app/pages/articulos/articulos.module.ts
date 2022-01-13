import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticulosRoutingModule } from './articulos-routing.module';
import { ArticulosComponent } from './articulos.component';
import { NuevoArticuloComponent } from './nuevo-articulo/nuevo-articulo.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllArticulosComponent } from './all-articulos/all-articulos.component';
import { OperacionesArticuloComponent } from './operaciones-articulo/operaciones-articulo.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ModalEditArticuloComponent } from './modal-edit-articulo/modal-edit-articulo.component';

@NgModule({
  declarations: [
    ArticulosComponent,
    NuevoArticuloComponent,
    AllArticulosComponent,
    OperacionesArticuloComponent,
    ModalEditArticuloComponent,
  ],
  imports: [
    CommonModule,
    ArticulosRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatSortModule,
    SweetAlert2Module.forRoot(),
  ],
})
export class ArticulosModule {}
