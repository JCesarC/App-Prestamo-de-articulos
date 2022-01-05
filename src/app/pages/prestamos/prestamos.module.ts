import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrestamosRoutingModule } from './prestamos-routing.module';
import { PrestamosComponent } from './prestamos.component';
import { MaterialModule } from 'src/app/material.module';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NuevoPrestamoComponent } from './nuevo-prestamo/nuevo-prestamo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditarPrestamoComponent } from './editar-prestamo/editar-prestamo.component';
import { ConfirmarPrestamoComponent } from './confirmar-prestamo/confirmar-prestamo.component';
import { ModalPrestamosComponent } from './modal-prestamos/modal-prestamos.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AllPrestamosComponent } from './all-prestamos/all-prestamos.component';
import { ModalDetailsComponent } from './modal-details/modal-details.component';

@NgModule({
  declarations: [
    PrestamosComponent,
    NuevoPrestamoComponent,
    EditarPrestamoComponent,
    ConfirmarPrestamoComponent,
    ModalPrestamosComponent,
    AllPrestamosComponent,
    ModalDetailsComponent,
  ],
  imports: [
    CommonModule,
    PrestamosRoutingModule,
    MaterialModule,
    MatSortModule,
    ReactiveFormsModule,
    FormsModule,
    MatPaginatorModule,
    NgbModule,
    SweetAlert2Module.forRoot(),
  ],
})
export class PrestamosModule {}
