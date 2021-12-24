import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { User } from '@app/shared/models/user.interface';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-prestamos',
  templateUrl: './modal-prestamos.component.html',
  styleUrls: ['./modal-prestamos.component.scss'],
})
export class ModalPrestamosComponent implements OnInit {
  @Input() public dataUsers;
  @Input() public dataArticulos;
  @Input() public type: string;

  displayedColumnsUsers: string[] = [
    'Id',
    'Nombres',
    'Apellidos',
    'Matricula o Codigo',
    'Rol',
    'Accion',
  ];
  displayedColumnsArticulos: string[] = [
    'id',
    'Descripcion',
    'Estatus',
    'Codigo',
    'Stock',
    'Accion',
  ];
  dataSource = new MatTableDataSource();

  @ViewChild(MatTable) table: MatTable<User>;
  @ViewChild(MatSort) sort: MatSort = new MatSort();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    if (this.type == 'users') {
      this.showUsers();
    } else if (this.type == 'articulos') {
      this.showArticulos();
    }

    console.log(this.dataUsers);
    // let dataType: string = this.data?.dataType;

    // if (dataType == 'Articulos') {
    //   this.selectArticulos();
    // } else if (dataType == 'Users') {
    //   this.selectUsers();
    // }
  }
  showUsers() {
    this.dataSource.data = this.dataUsers;
  }
  showArticulos() {
    this.dataSource.data = this.dataArticulos;
  }

  selectElement(element){
    console.log(element)
  }

  // selectArticulos() {
  //   this.dataSource = this.data?.arrayArticulos;
  // }

  // selectUsers() {
  //   this.dataSource = this.data?.arrayUsers;
  // }
}
