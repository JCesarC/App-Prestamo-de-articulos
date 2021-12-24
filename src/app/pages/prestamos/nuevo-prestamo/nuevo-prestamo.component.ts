import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTable } from '@angular/material/table';
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

export interface Usuarios {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const Usuarios_DATA: Usuarios[] = [
  { position: 1, name: 'Hydrogene', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

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
  inputMatricula = new FormControl({
    value: '',
    disabled: true,
  });
  inputGrupo = new FormControl({ value: '', disabled: true });

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = [...Usuarios_DATA];

  articuloArray: Articulo[] = [
    {
      id: 1,
      descripcion: 'Ejemplo articulo 1',
      stock: 2,
      estatus: 'Disponible',
      codigo: '00000',
      cantidad: 3,
    },
    {
      id: 2,
      descripcion: 'Ejemplo articulo 1',
      stock: 2,
      estatus: 'Disponible',
      codigo: '00000',
      cantidad: 4,
    },
    {
      id: 3,
      descripcion: 'Ejemplo articulo 1',
      stock: 2,
      estatus: 'Disponible',
      codigo: '00000',
      cantidad: 2,
    },
  ];

  @ViewChild(MatTable) table: MatTable<Usuarios>;

  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    public dialog: MatDialog,
    private artSvc: ArticuloService,
    private userSvc: UserService,
    public activeModal: NgbActiveModal
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  dataUsers: User[];
  dataArticulos;

  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }
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

  openModalUsers() {
    const modalRef = this.modalService.open(ModalPrestamosComponent, {
      size: 'lg',
      scrollable: true,
    });
    modalRef.componentInstance.dataUsers = this.dataUsers;
    modalRef.componentInstance.type = 'users';

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

  triggerModal(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (res) => {
          this.closeModal = `Closed with: ${res}`;
        },
        (res) => {
          this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
