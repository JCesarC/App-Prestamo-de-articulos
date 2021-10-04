import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoPrestamoComponent } from './nuevo-prestamo/nuevo-prestamo.component';
import { PrestamosComponent } from './prestamos.component';

const routes: Routes = [{ path: '', component: PrestamosComponent },{
  path:'nuevo', component:NuevoPrestamoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrestamosRoutingModule {}
