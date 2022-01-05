import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import {
  NgbModal,
  NgbModalConfig,
  NgbActiveModal,
} from '@ng-bootstrap/ng-bootstrap';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ModalPrestamosComponent } from '../modal-prestamos/modal-prestamos.component';
import { Articulo } from '@app/shared/models/articulo.interface';
import { ArticuloService } from '@app/pages/articulos/articulo.service';
import { UserService } from '@app/pages/usuarios/user.service';
import { User } from '@app/shared/models/user.interface';
import { PrestamoService } from '../prestamo.service';
import { prestamoResponse } from '@app/shared/models/prestamo.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-prestamo',
  templateUrl: './nuevo-prestamo.component.html',
  styleUrls: ['./nuevo-prestamo.component.scss'],
  providers: [NgbModalConfig, NgbModal],
})
export class NuevoPrestamoComponent implements OnInit {
  model: NgbDateStruct;

  closeModal: string;
  inputUsuario = new FormControl({ value: '', disabled: true });
  inputApellidos = new FormControl({ value: '', disabled: true });
  inputMatricula = new FormControl({
    value: '',
    disabled: true,
  });

  date = new FormControl(new Date());

  userSearch: string = '';
  articuloSearch: string = '';
  //date: string;

  userSelected: User = {
    id: 0,
    Nombres: '',
    Apellidos: '',
    MatriculaCodigo: '',
    rol: undefined,
  };

  dataSource = new MatTableDataSource();

  articulosArray: Articulo[] = [];

  @ViewChild(MatTable) table: MatTable<User>;

  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    public dialog: MatDialog,
    private artSvc: ArticuloService,
    private userSvc: UserService,
    public activeModal: NgbActiveModal,
    public prestamoSvc: PrestamoService
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  dataUsers: User[];
  dataArticulos;

  // openScrollableContent(longContent) {
  //   this.modalService.open(longContent, { scrollable: true });
  // }
  // openDialog() {
  //   const dialogRef = this.dialog.open(ModalComponent);

  //   dialogRef.afterClosed().subscribe((result) => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }
  ngOnInit(): void {
    this.inputUsuario.disable();

    this.artSvc.getAll().subscribe((articulos) => {
      this.dataArticulos = articulos;
    });

    this.userSvc.getAll().subscribe((users) => {
      this.dataUsers = users;
    });
  }

  getDate(dateLimit: Date): string {
    //let options = {day:'numeric', month:'numeric', year:'numeric'};
    // var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let dateConverted = dateLimit.toLocaleDateString('en-GB');
    return dateConverted;
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
            this.articulosArray.push(result);
          }
        }
      });
    }

    // modalRef.componentInstance.dataArticulos = this.dataArticulos;
  }

  openModalArticulos() {
    const modalRef = this.modalService.open(ModalPrestamosComponent, {
      scrollable: true,
      size: 'lg',
    });
    modalRef.componentInstance.dataArticulos = this.dataArticulos;
    modalRef.componentInstance.type = 'articulos';
  }

  addArticulo(articulo: Articulo) {
    if (articulo.Cantidad < articulo.Stock) {
      articulo.Cantidad = articulo.Cantidad + 1;
    }
  }

  removeArticulo(articulo: Articulo) {
    if (articulo.Cantidad > 1) {
      articulo.Cantidad = articulo.Cantidad - 1;
    } else {
      this.articulosArray = this.articulosArray.filter((x) => x != articulo);
    }
  }

  async savePrestamo() {
    const error = this.validateErrors();
    if (error === '') {
      console.log('No hay errores');
      try {
        let dataPrestamo: prestamoResponse = {
          articulosId: this.getIdArticulos(),
          cantidadArticulos: this.getCantidadArticulos(),
          userId: this.userSelected.id,
          fecha_limite: this.getDate(this.date.value),
          comentarios: 'Primeros prestamos',
        };
        let res = await this.prestamoSvc.newPrestamo(dataPrestamo).toPromise();
        console.log('-----', res);
        if (res.message === 'Prestamo creado') {
          this.showConfirmado('Prestamo guardado correctamente');
          console.log(res);
        } else {
          this.showError('Algo ha salido mal');
          console.log(res);
        }
      } catch (e) {
        this.showError('Algo ha salido mal al guardar el prestamo');
        console.log(e);
        //console.log(res)
      }
    } else {
      this.showErrors(error);
    }

    //this.showConfirmado('Guardado correctamente');
  }

  validateErrors(): string {
    let error = '';
    const dateSelected = this.getDate(this.date.value);
    let parts = dateSelected.split('/');
    let today = this.getTodayDate();
    let parts_today = today.split('/');

    let date_selected = new Date(
      parseInt(parts[2]),
      parseInt(parts[1]) - 1,
      parseInt(parts[0])
    );
    let date_today = new Date(
      parseInt(parts_today[2]),
      parseInt(parts_today[1]) - 1,
      parseInt(parts_today[0])
    );

    if (date_selected.getTime() < date_today.getTime()) {
      error = 'Por favor no selecciones una fecha anterior al dia de hoy';
      return error;
    }
    if (this.userSelected.id === 0) {
      error = 'No se ha seleccionado un usuario';
      return error;
    }
    if (this.articulosArray.length < 1) {
      error = 'No se han agregado articulos';
      return error;
    }
    return error;
  }

  getTodayDate(): string {
    let date = new Date();
    let today = date.toLocaleDateString('en-GB');
    return today;
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
  showErrors(text: string) {
    Swal.fire({
      icon: 'error',
      title: 'Ha ocurrido el siguiente error:',
      text: text,
    });
  }

  getIdArticulos(): string {
    let arrayArticulosIds = [];
    for (let i = 0; i < this.articulosArray.length; i++) {
      let id = this.articulosArray[i].id;
      arrayArticulosIds.push(id);
    }
    let articulosIds = arrayArticulosIds.join();
    return articulosIds;
  }

  getCantidadArticulos(): string {
    let arrayCantArt = [];
    for (const articulo of this.articulosArray) {
      let cantidad = articulo.Cantidad;
      arrayCantArt.push(cantidad);
    }
    let cantidadArticulos = arrayCantArt.join();
    return cantidadArticulos;
  }
}
