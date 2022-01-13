import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { MatTable, MatTableDataSource } from '@angular/material/table';

import { Sort } from '@angular/material/sort';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ArticuloService } from './articulo.service';
import { Articulo } from '@app/shared/models/articulo.interface';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.scss']
})
export class ArticulosComponent implements OnInit, AfterViewInit {
  links=['Articulos', 'Nuevo', 'Operaciones']
  activo = this.links[0];

  searchKey:string;
  construcsearchKey:string;

  displayedColumns: string[] = ['id', 'Descripcion', 'Estatus','Codigo', 'Stock'];
  dataSource = new MatTableDataSource()
  //dataSource = ELEMENT_DATA;
  
  @ViewChild(MatTable) table : MatTable<Articulo>;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private artSvc:ArticuloService) { }
  
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.artSvc.getAll().subscribe((articulos) => {
      console.log('Artitulos encontrados: ', articulos);
      this.dataSource.data = articulos;
      this.dataSource.paginator = this.paginator;
    });
  }
  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }
  applyFilter() {
    // this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }
}
