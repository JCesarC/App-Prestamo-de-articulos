import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { NuevoPrestamoComponent } from './pages/prestamos/nuevo-prestamo/nuevo-prestamo.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: 'notFound',
    loadChildren: () =>
      import('./pages/notfound/notfound.module').then((m) => m.NotfoundModule),
  },
  {
    path: 'home', canActivate:[AuthGuardService], 
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'prestamos', canActivate:[AuthGuardService], 
    loadChildren: () =>
      import('./pages/prestamos/prestamos.module').then(
        (m) => m.PrestamosModule
      ),
  },
  {
    path: 'articulos', canActivate:[AuthGuardService], 
    loadChildren: () =>
      import('./pages/articulos/articulos.module').then(
        (m) => m.ArticulosModule
      ),
  },
  {
    path: 'usuarios', canActivate:[AuthGuardService], 
    loadChildren: () =>
      import('./pages/usuarios/usuarios.module').then((m) => m.UsuariosModule),
  },
  {
    path: '', 
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'info', 
    loadChildren: () =>
      import('./pages/info/info.module').then((m) => m.InfoModule),
  },
  {
    path: 'reportes', canActivate:[AuthGuardService], 
    loadChildren: () =>
      import('./pages/reportes/reportes.module').then((m) => m.ReportesModule),
  },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: '**', pathMatch: 'full', redirectTo: 'notFound' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
