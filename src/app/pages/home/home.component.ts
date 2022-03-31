import { Component, OnInit, AfterViewInit } from '@angular/core';
import {
  Prestamo,
  prestamoResponse,
} from '@app/shared/models/prestamo.interface';
import {
  faArrowCircleRight,
  faDatabase,
  faFileAlt,
  faShareSquare,
  faUserFriends,
} from '@fortawesome/free-solid-svg-icons';
import { Chart } from 'chart.js';
import { forkJoin } from 'rxjs';
import { ArticuloService } from '../articulos/articulo.service';
import { PrestamoService } from '../prestamos/prestamo.service';
import { UserService } from '../usuarios/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalPrestamosComponent } from '../prestamos/modal-prestamos/modal-prestamos.component';
import { User } from '@app/shared/models/user.interface';
import { Articulo } from '@app/shared/models/articulo.interface';
import { FormControl } from '@angular/forms';
import { prestamoQuick } from '../../shared/models/prestamo.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  faFileAlt = faFileAlt;
  faUserFriends = faUserFriends;
  faDatabase = faDatabase;
  faShareSquare = faShareSquare;
  faArrowCircleRight = faArrowCircleRight;

  countPrestamos: number = 0;

  countPrestamosToday: number = 0;

  countArticulos: number = 0;

  inputUsuario = new FormControl({ value: '', disabled: true });

  countUsuarios: number = 0;

  userSearch: string = '';
  articuloSearch: string = '';

  dataUsers: User[];
  dataArticulos: Articulo[];
  dataPrestamo: Prestamo[];

  articulosArray: Articulo[] = [];
  datesArray = [];
  counterArray = [];

  userSelected: User = {
    id: 0,
    Nombres: '',
    Apellidos: '',
    MatriculaCodigo: '',
    rol: undefined,
  };
  articuloSelected: Articulo = {
    id: 0,
    Descripcion: '',
    Estatus: '',
    Codigo: '',
    Cantidad: 0,
    Consumible: false,
    Categoria: undefined,
    Ubicacion: undefined,
    Stock: 0,
    ReferenciaUbicacion: '',
  };

  today: string;

  constructor(
    private modalService: NgbModal,
    private prestamoSvc: PrestamoService,
    private articuloSvc: ArticuloService,
    private usrSvc: UserService
  ) {}
  ngAfterViewInit(): void {}

  ngOnInit(): void {
    this.inputUsuario.disable();
    this.getTodayDate();
    forkJoin([
      this.updateEstatus(),
      this.getAllPrestamos(),
      this.getAllUsuarios(),
      this.getAllArticulos(),
    ]).subscribe(([w, x, y, z]) => {
      if (x) {
        this.countPrestamos = x.length;
        this.dataPrestamo = x;
        this.counterArray = this.filterDates(this.dataPrestamo);
        console.log(this.counterArray);
        this.countPrestamosToday = this.getOccurrence(
          this.datesArray,
          this.today
        );
      }
      if (y) {
        this.dataUsers = y;
        this.countUsuarios = y.length;
      }
      if (z) {
        this.dataArticulos = z;
        this.countArticulos = z.length;
      }
    });
  }

  async getAllPrestamos() {
    return this.prestamoSvc.getAll().toPromise();
  }
  async getAllUsuarios() {
    return this.usrSvc.getAll().toPromise();
  }

  async getAllArticulos() {
    return this.articuloSvc.getAll().toPromise();
  }

  async updateEstatus() {
    return this.prestamoSvc.getEstatus().toPromise();
  }
  filterDates(data: Prestamo[]): any {
    const datesCounter = {};
    for (const prestamo of data) {
      this.datesArray.push(prestamo.Fecha_prestamo);
    }
    this.datesArray.forEach(function (x) {
      datesCounter[x] = (datesCounter[x] || 0) + 1;
    });
    return datesCounter;
  }
  getOccurrence(array, value) {
    return array.filter((v) => v === value).length;
  }

  getTodayDate() {
    let date = new Date();
    this.today = date.toLocaleDateString('en-GB');
  }

  openModal(type: string) {
    const modalRef = this.modalService.open(ModalPrestamosComponent, {
      size: 'lg',
      scrollable: true,
    });
    if (type == 'users') {
      modalRef.componentInstance.data = this.dataUsers;
      modalRef.componentInstance.type = 'users';
      modalRef.componentInstance.search = this.userSearch;
      modalRef.result.then((result) => {
        if (result) {
          console.log(result);
          this.userSelected = result;
        }
      });
    } else if (type == 'articulos') {
      modalRef.componentInstance.data = this.dataArticulos;
      modalRef.componentInstance.type = 'articulos';
      modalRef.componentInstance.search = this.articuloSearch;
      modalRef.result.then((result) => {
        if (result) {
          console.log(result);
          result.Cantidad = 1;
          const found = this.articulosArray.some((x) => x.id === result.id);
          if (!found) {
            this.articuloSelected = result;
          }
        }
      });
    }

    // modalRef.componentInstance.dataArticulos = this.dataArticulos;
  }
  addArticulo(articulo: Articulo) {
    if (articulo.Cantidad < articulo.Stock) {
      articulo.Cantidad = articulo.Cantidad + 1;
    }
  }

  validateErrors(): string {
    let error = '';
    if (this.userSelected.id === 0) {
      error = 'No se ha seleccionado un usuario';
      return error;
    }
    if (this.articuloSelected.id === 0) {
      error = 'No se han agregado articulos';
      return error;
    }
    return error;
  }
  removeArticulo(articulo: Articulo) {
    if (articulo.Cantidad > 1) {
      articulo.Cantidad = articulo.Cantidad - 1;
    } else {
      this.articuloSelected = {
        id: 0,
        Descripcion: '',
        Estatus: '',
        Codigo: '',
        Cantidad: 0,
        Consumible: false,
        Categoria: undefined,
        Ubicacion: undefined,
        Stock: 0,
        ReferenciaUbicacion: '',
      };
      //this.articulosArray = this.articulosArray.filter((x) => x != articulo);
    }
  }
  async savePrestamo() {
    const error = this.validateErrors();
    if (error === '') {
      console.log('No hay errores');
      /**
       * Añadir el modelo PrestamoIndividualResponse
       * Añadir el controlador
       * Añadir el micro servicio
       *
       */

      try {
        let dataPrestamo: prestamoQuick = {
          articuloObject: this.articuloSelected,
          Cantidad: this.articuloSelected.Cantidad,
          usuarioObject: this.userSelected,
        };
        let res = await this.prestamoSvc
          .newPrestamoSolo(dataPrestamo)
          .toPromise();
        if (res) {
          this.showConfirmado(res.message);
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      this.showErrors(error);
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

  showErrors(text: string) {
    Swal.fire({
      icon: 'error',
      title: 'Ha ocurrido el siguiente error:',
      text: text,
    });
  }
  reloadPage() {
    window.location.reload();
  }
}
