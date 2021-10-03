import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './pages/notfound/notfound.component';

const routes: Routes = [
  {
    path: 'notFound',
    loadChildren: () =>
      import('./pages/notfound/notfound.module').then((m) => m.NotfoundModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'prestamos',
    loadChildren: () =>
      import('./pages/prestamos/prestamos.module').then(
        (m) => m.PrestamosModule
      ),
  },
  {
    path: 'articulos',
    loadChildren: () =>
      import('./pages/articulos/articulos.module').then(
        (m) => m.ArticulosModule
      ),
  },
  {
    path: 'usuarios',
    loadChildren: () =>
      import('./pages/usuarios/usuarios.module').then((m) => m.UsuariosModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  { path: 'reportes', loadChildren: () => import('./pages/reportes/reportes.module').then(m => m.ReportesModule) },
  { path: '**', pathMatch: 'full', redirectTo: 'notFound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
