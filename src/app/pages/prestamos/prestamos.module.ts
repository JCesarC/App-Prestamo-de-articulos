import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrestamosRoutingModule } from './prestamos-routing.module';
import { PrestamosComponent } from './prestamos.component';
import { MaterialModule } from 'src/app/material.module';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    PrestamosComponent
  ],
  imports: [
    CommonModule,
    PrestamosRoutingModule,
    MaterialModule,
    MatSortModule,
    ReactiveFormsModule,
    FormsModule,
    MatPaginatorModule
  ]
})
export class PrestamosModule { }
