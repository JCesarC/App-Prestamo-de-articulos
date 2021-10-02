import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticulosRoutingModule } from './articulos-routing.module';
import { ArticulosComponent } from './articulos.component';


@NgModule({
  declarations: [
    ArticulosComponent
  ],
  imports: [
    CommonModule,
    ArticulosRoutingModule
  ]
})
export class ArticulosModule { }
