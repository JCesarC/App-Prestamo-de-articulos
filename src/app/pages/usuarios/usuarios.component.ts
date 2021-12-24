import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { MatTable, MatTableDataSource } from '@angular/material/table';

import { Sort } from '@angular/material/sort';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { UserService } from './user.service';
import { User } from '@app/shared/models/user.interface';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent implements OnInit, AfterViewInit {
  activo = 'Usuarios';
  searchKey: string;

  displayedColumns: string[] = ['Id', 'Nombres', 'Apellidos', 'Matricula o Codigo', 'Rol'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatTable) table: MatTable<User>;
  @ViewChild(MatSort) sort : MatSort = new MatSort();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private userSvc: UserService) {}

  ngOnInit(): void {
    this.userSvc.getAll().subscribe((users) => {
      console.log('Usuarios encontrados: ', users);
      this.dataSource.data = users;
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
