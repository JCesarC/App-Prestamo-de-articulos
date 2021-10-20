import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { Articulo } from 'src/app/models/articulo';

export interface Usuarios {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const Usuarios_DATA: Usuarios[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
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
  inputUsuario = new FormControl({ value: 'Ejemplo nombre', disabled: true });
  inputMatricula = new FormControl({
    value: 'Ejemplo matricula',
    disabled: true,
  });
  inputGrupo = new FormControl({ value: 'Ejemplo grupo', disabled: true });

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = [...Usuarios_DATA];

  articuloArray: Articulo[] = [
    {
      id: 1,
      nombre: 'Ejemplo articulo 1',
      cantidad: 2,
    },
    {
      id: 2,
      nombre: 'Ejemplo articulo 2',
      cantidad: 4,
    },
    {
      id: 3,
      nombre: 'Ejemplo articulo 3',
      cantidad: 2,
    },
  ];

  @ViewChild(MatTable) table: MatTable<Usuarios>;

  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    public dialog: MatDialog
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }
  openDialog() {
    const dialogRef = this.dialog.open(ModalComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit(): void {
    this.inputUsuario.disable();
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
