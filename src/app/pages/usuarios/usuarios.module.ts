import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { AllUsuariosComponent } from './all-usuarios/all-usuarios.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ModalEditComponent } from './modal-edit/modal-edit.component';
import { OperacionesUsuarioComponent } from './operaciones-usuario/operaciones-usuario.component';
import { ModalRolComponent } from './modal-rol/modal-rol.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    UsuariosComponent,
    NuevoUsuarioComponent,
    AllUsuariosComponent,
    ModalEditComponent,
    OperacionesUsuarioComponent,
    ModalRolComponent,
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    MatPaginatorModule,
    MatSortModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    SweetAlert2Module.forRoot(),
  ],
})
export class UsuariosModule {}
