import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Prestamo } from '@app/shared/models/prestamo.interface';
import { PrestamoService } from '../prestamo.service';

@Component({
  selector: 'app-confirmar-prestamo',
  templateUrl: './confirmar-prestamo.component.html',
  styleUrls: ['./confirmar-prestamo.component.scss']
})
export class ConfirmarPrestamoComponent implements OnInit, AfterViewInit {

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
  dataSource: MatTableDataSource<Prestamo>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort = new MatSort();

  constructor(private prestamoSvc: PrestamoService) {
    // Create 100 users


    // Assign the data to the data source for the table to render
    // this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {



  }

  ngAfterViewInit() {
   
   }

  
}


