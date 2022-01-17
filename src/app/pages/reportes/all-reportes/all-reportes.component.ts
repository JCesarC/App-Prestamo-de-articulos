import { Component, OnInit } from '@angular/core';
import { ArticuloService } from '@app/pages/articulos/articulo.service';
import { UserService } from '@app/pages/usuarios/user.service';
import { Articulo } from '@app/shared/models/articulo.interface';
import { User } from '@app/shared/models/user.interface';
import { ExporterService } from '../exporter.service';

@Component({
  selector: 'app-all-reportes',
  templateUrl: './all-reportes.component.html',
  styleUrls: ['./all-reportes.component.scss'],
})
export class AllReportesComponent implements OnInit {
  dataArticulos: Articulo[] = [];
  dataUsuarios: User[] = [];

  constructor(
    private excelSvc: ExporterService,
    private artSvc: ArticuloService,
    private userSvc: UserService
  ) {}

  ngOnInit(): void {
    this.getAllArticulos();
    this.getAllUsers();
  }
  async getAllArticulos() {
    let res = await this.artSvc.getAll().toPromise();
    if (res) {
      this.dataArticulos = res;
    }
  }

  async getAllUsers() {
    let res = await this.userSvc.getAll().toPromise();
    if (res) {
      this.dataUsuarios = res;
    }
  }

  exportAsExcel(type: string): void {
    if (type === 'Articulos') {
      this.excelSvc.exportToExcel(this.dataArticulos, 'Articulos');
    } else if (type === 'Usuarios') {
      this.excelSvc.exportToExcel(this.dataUsuarios, 'Usuarios');
    }
  }
}
