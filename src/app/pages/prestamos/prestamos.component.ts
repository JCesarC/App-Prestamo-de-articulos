import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';

import { Sort } from '@angular/material/sort';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { PrestamoService } from './prestamo.service';
import { Prestamo } from '@app/shared/models/prestamo.interface';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.scss'],
})
export class PrestamosComponent implements OnInit {
  constructor(private prestamoSvc: PrestamoService) {}

  activo = 'Prestamos';

  displayedColumns: string[] = [
    'id',
    'Matricula',
    'Nombres',
    'Estatus',
    'Fecha de prestamo',
    'Fecha limite',
    'Detalles',
    'Accion',
  ];
  dataSource = new MatTableDataSource();

  @ViewChild(MatTable) table: MatTable<Prestamo>;
  @ViewChild(MatSort) sort: MatSort = new MatSort();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  searchKey: string;

  ngOnInit(): void {
    this.prestamoSvc.getAll().subscribe((prestamos) => {
      console.log('Prestamos encontrados: ', prestamos);
      this.dataSource.data =  prestamos;
      this.dataSource.paginator = this.paginator;
    });
  }

  ngAfterViewInit(): void {
     this.dataSource.sort = this.sort;
     this.dataSource.paginator = this.paginator;
  }

  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }
  applyFilter() {
    // this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }
}
