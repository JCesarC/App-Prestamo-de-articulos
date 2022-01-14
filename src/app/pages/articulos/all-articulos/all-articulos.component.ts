import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Articulo } from 'api-lab/src/entity/Articulos';
import { ArticuloService } from '../articulo.service';
import Swal from 'sweetalert2';
import { CategoriaService } from '../categoria.service';
import { ModalEditArticuloComponent } from '../modal-edit-articulo/modal-edit-articulo.component';
import { ArticuloResponse } from '@app/shared/models/articulo.interface';
import { MatDialog } from '@angular/material/dialog';

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
    'Accion',
  ];
  dataSource = new MatTableDataSource();
  searchKey: string;

  @ViewChild(MatSort) sort: MatSort = new MatSort();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private artSvc: ArticuloService,
    public modalService: NgbModal,
    private catSvc: CategoriaService,
    public dialog: MatDialog
  ) {
    this.artSvc.getAll().subscribe((dataArticulos) => {
      this.dataSource = new MatTableDataSource(dataArticulos);
      this.Sort();
    });
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.Sort();
  }

  Sort() {
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
  async editModal(element: Articulo) {
    let categorias = await this.catSvc.getAll().toPromise();
    console.log(categorias);
    if (categorias) {
      const dialogRef = this.dialog.open(ModalEditArticuloComponent, {
        data: { dataArticulo: element, categorias: categorias },
      });

      dialogRef.afterClosed().subscribe(async (result: ArticuloResponse) => {
        if (result) {
          console.log('devuelto......');
          console.log(result);
          let res = await this.artSvc
            .updateArticulo(element.id, result)
            .toPromise();
          if (res) {
            this.showConfirmado(res.message);
          }
        }
      });
    }
  }
  async deleteArticulo(element: Articulo) {
    let res = await this.artSvc.deleteArticulo(element.id).toPromise();
    if(res){
      console.log(res);
      this.showConfirmado(res.message);
    }
  }

  showConfirmado(text: string) {
    Swal.fire({
      icon: 'success',
      title: text,
      didClose: this.reloadPage,
      showConfirmButton: true,
    });
  }
  reloadPage() {
    window.location.reload();
  }
}
