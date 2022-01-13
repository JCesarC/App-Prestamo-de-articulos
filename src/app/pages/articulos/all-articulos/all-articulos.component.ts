import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Articulo } from 'api-lab/src/entity/Articulos';
import { ArticuloService } from '../articulo.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-all-articulos',
  templateUrl: './all-articulos.component.html',
  styleUrls: ['./all-articulos.component.scss'],
})
export class AllArticulosComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'id',
    'Descripcion',
    'Categoria',
    'Estatus',
    'Codigo',
    'Stock',
    'Accion'
  ];
  dataSource = new MatTableDataSource();
  searchKey: string;

  @ViewChild(MatSort) sort: MatSort = new MatSort();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private artSvc: ArticuloService, public modalSvc: NgbModal) {
    this.artSvc.getAll().subscribe((dataArticulos) =>{
      this.dataSource = new MatTableDataSource(dataArticulos);
      this.Sort()
    })
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.Sort();
  }

  Sort(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    const sortState: Sort = { active: 'id', direction: 'desc' };
    this.sort.active = sortState.active;
    this.sort.direction = sortState.direction;
    this.sort.sortChange.emit(sortState);
  }
  applyFilter() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }
  editModal(element:Articulo){

  }
  deleteArticulo(element:Articulo){
    
  }


}
