import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {
  pArticulo,
  Prestamo,
  prestamoUpdate,
} from '@app/shared/models/prestamo.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { forkJoin, Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { ModalDetailsComponent } from '../modal-details/modal-details.component';
import { PrestamoService } from '../prestamo.service';

@Component({
  selector: 'app-all-prestamos',
  templateUrl: './all-prestamos.component.html',
  styleUrls: ['./all-prestamos.component.scss'],
})
export class AllPrestamosComponent implements OnInit, AfterViewInit {
  isLoading = true;
  mode: ProgressSpinnerMode = 'indeterminate';
  searchKey: string;
  color = 'blue';
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

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort = new MatSort();

  constructor(
    private prestamoSvc: PrestamoService,
    private modalService: NgbModal
  ) {
    // Create 100 users
    // const prestamos = this.prestamoSvc.getAll().subscribe((dataPrestamos) => {
    //   this.dataSource = new MatTableDataSource(dataPrestamos);
    //   this.Sort();
    // });
    // Assign the data to the data source for the table to render
    // this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
    forkJoin([this.updateEstatus(), this.getAllData()]).subscribe(([x, y]) => {
      console.log(x);
      console.log('Exectuded 2 consults');
      this.isLoading = true;
      if (y) {
        this.dataSource = new MatTableDataSource(y);
        this.Sort();
        this.isLoading = false;
        console.log('Estatus changed');
      }
    });
    // this.updateEstatus();
    // this.getData();
  }

  ngAfterViewInit() {}
  // let res = await this.prestamoSvc
  //     .confirmarPrestamo(element.id, dataPrestamo)
  //     .toPromise();

  updateEstatus(): Observable<any> {
    // let res = this.prestamoSvc.getEstatus().toPromise();
    return this.prestamoSvc.getEstatus();
  }

  getAllData() {
    return this.prestamoSvc.getAll();
  }

  async getData() {
    this.isLoading = true;
    console.log('setted true');
    let res = await this.prestamoSvc.getAll().toPromise();

    if (res) {
      this.dataSource = new MatTableDataSource(res);
      this.isLoading = false;
      this.Sort();

      console.log('Estatus changed');
    }
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

  showDetailsModal(element: Prestamo) {
    console.log(element);
    const modalRef = this.modalService.open(ModalDetailsComponent, {
      scrollable: true,
      size: 'lg',
    });
    modalRef.componentInstance.dataPrestamo = element;
    modalRef.componentInstance.type = 'showDetails';
    modalRef.result.then((result) => {
      if (result) {
        console.log(result);
      }
    });
  }

  async showConfirmDetails(element: Prestamo) {
    const articulos = [];
    element.articulosPrestamo.forEach((x) =>
      articulos.push(Object.assign({}, x))
    );
    const modalRef = this.modalService.open(ModalDetailsComponent, {
      scrollable: true,
      size: 'lg',
    });
    modalRef.componentInstance.dataPrestamo = element;
    modalRef.componentInstance.type = 'confirmDetails';
    modalRef.componentInstance.articulosArray_r = articulos;
    modalRef.result.then(async (result) => {
      if (result) {
        let dataPrestamo: prestamoUpdate = {
          articulosId: this.getArticulosIds(result.articulosPrestamo),
          cantidadArticulos: this.getCantidadArticulos(
            result.articulosPrestamo
          ),
          Estatus: this.getEstatus(result.Fecha_limite),
          Fecha_devolucion: this.getTodayDate(),
          Comentarios: result.Comentarios,
        };
        console.log(result);

        let res = await this.prestamoSvc
          .confirmarPrestamo(element.id, dataPrestamo)
          .toPromise();
        if (res.message === 'Prestamo actualizado') {
          this.showConfirmado('Prestamo confirmado correctamente');
          console.log(res);
        } else {
          this.showError('Algo ha salido mal');
          console.log(res);
        }
      }
    });
  }

  async confirmPrestamo(element: Prestamo) {
    let dataPrestamo: prestamoUpdate = {
      articulosId: this.getArticulosIds(element.articulosPrestamo),
      cantidadArticulos: this.getCantidadArticulos(element.articulosPrestamo),
      Estatus: this.getEstatus(element.Fecha_limite),
      Fecha_devolucion: this.getTodayDate(),
      Comentarios: element.Comentarios,
    };

    let res = await this.prestamoSvc
      .confirmarPrestamo(element.id, dataPrestamo)
      .toPromise();
    if (res.message === 'Prestamo actualizado') {
      this.showConfirmado('Prestamo confirmado correctamente');
      console.log(res);
    } else {
      this.showError('Algo ha salido mal');
      console.log(res);
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

  showError(text: string) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: text,
    });
  }

  getArticulosIds(array: pArticulo[]): string {
    let arrayArticulos = [];
    for (const articulo of array) {
      let id = articulo.Articulo.id;
      arrayArticulos.push(id);
    }
    let arrrayString = arrayArticulos.join();
    return arrrayString;
  }

  getCantidadArticulos(array: pArticulo[]): string {
    let arrayCantidades = [];
    for (const articulo of array) {
      let cantidad = articulo.cantidad;
      arrayCantidades.push(cantidad);
    }
    let arrayString = arrayCantidades.join();
    return arrayString;
  }

  getEstatus(fecha_limite: string): string {
    let parts = fecha_limite.split('/');
    let today = this.getTodayDate();
    let parts_today = today.split('/');
    //return new Date(parts[2], parts[1] - 1, parts[0]);
    let date_limit = new Date(
      parseInt(parts[2]),
      parseInt(parts[1]) - 1,
      parseInt(parts[0])
    );
    let date_today = new Date(
      parseInt(parts_today[2]),
      parseInt(parts_today[1]) - 1,
      parseInt(parts_today[0])
    );
    let estatus = '';
    if (date_today.getTime() <= date_limit.getTime()) {
      estatus = 'Confirmado';
      console.log('Confirmado');
    } else if (date_today.getTime() > date_limit.getTime()) {
      estatus = 'Entregado con retraso';
      console.log('Entregado con retraso');
    }

    return estatus;
  }

  getTodayDate(): string {
    let date = new Date();
    let today = date.toLocaleDateString('en-GB');
    return today;
  }

  deletePrestamo(element: Prestamo) {}
}
