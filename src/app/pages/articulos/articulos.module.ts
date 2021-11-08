import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticulosRoutingModule } from './articulos-routing.module';
import { ArticulosComponent } from './articulos.component';
import { NuevoArticuloComponent } from './nuevo-articulo/nuevo-articulo.component';
import { EditarArticuloComponent } from './editar-articulo/editar-articulo.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ArticulosComponent,
    NuevoArticuloComponent,
    EditarArticuloComponent,
    
  ],
  imports: [
    CommonModule,
    ArticulosRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatSortModule,
  ]
})
export class ArticulosModule { }
