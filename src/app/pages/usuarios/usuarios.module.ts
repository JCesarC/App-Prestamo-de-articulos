import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';


@NgModule({
  declarations: [
    UsuariosComponent,
    EditarUsuarioComponent,
    NuevoUsuarioComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    MatPaginatorModule,
    MatSortModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UsuariosModule { }
