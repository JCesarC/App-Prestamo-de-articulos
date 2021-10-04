import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrestamosRoutingModule } from './prestamos-routing.module';
import { PrestamosComponent } from './prestamos.component';
import { MaterialModule } from 'src/app/material.module';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NuevoPrestamoComponent } from './nuevo-prestamo/nuevo-prestamo.component';
@NgModule({
  declarations: [
    PrestamosComponent,
    NuevoPrestamoComponent
  ],
  imports: [
    CommonModule,
    PrestamosRoutingModule,
    MaterialModule,
    MatSortModule,
    ReactiveFormsModule,
    FormsModule,
    MatPaginatorModule,
    
  ],
})
export class PrestamosModule { }
