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
  @Input() public data;
  @Input() public type: string;
  @Input() public search:string;

  searchKey:string;

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
    this.showElements();
    this.searchKey = this.search;
    this.applyFilter();



    console.log(this.data);
    // let dataType: string = this.data?.dataType;

    // if (dataType == 'Articulos') {
    //   this.selectArticulos();
    // } else if (dataType == 'Users') {
    //   this.selectUsers();
    // }
  }
  showElements() {
    this.dataSource.data = this.data;
  }

  selectElement(element){
    console.log(element)
    this.activeModal.close(element)
  }

  onSearchClear(){
    this.searchKey = '';
    this.applyFilter();
  }
  applyFilter(){
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }

  // selectArticulos() {
  //   this.dataSource = this.data?.arrayArticulos;
  // }

  // selectUsers() {
  //   this.dataSource = this.data?.arrayUsers;
  // }
}
