import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { Articulo } from '@app/shared/models/articulo.interface';
import { Prestamo, pArticulo } from '@app/shared/models/prestamo.interface';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-details',
  templateUrl: './modal-details.component.html',
  styleUrls: ['./modal-details.component.scss'],
  
})
export class ModalDetailsComponent implements OnInit {
  @ViewChild(MatAccordion) accordion:MatAccordion;

  @Input() public dataPrestamo: Prestamo;
  @Input() public articulosArray_r: pArticulo[];
  @Input() public type: string;
  step = 1;
  articulosArray;

  inputUsuario;
  inputMatricula;
  inputEstatus;
  inputFechaPrestamo;
  inputHora;
  inputFechaLimite;
  inputFechaDevolucion;
  inputComentarios;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    this.articulosArray = this.dataPrestamo.articulosPrestamo;
    

    this.inputUsuario = new FormControl({
      value: this.dataPrestamo.Nombres,
      disabled: true,
    });

    this.inputMatricula = new FormControl({
      value: this.dataPrestamo.MatriculaCodigo,
      disabled: true,
    });
    this.inputEstatus = new FormControl({
      value: this.dataPrestamo.Estatus,
      disabled: true,
    });
    this.inputFechaPrestamo = new FormControl({
      value: this.dataPrestamo.Fecha_prestamo,
      disabled: true,
    });
    this.inputHora = new FormControl({
      value: this.dataPrestamo.Hora,
      disabled: true,
    });
    this.inputFechaLimite = new FormControl({
      value: this.dataPrestamo.Fecha_limite,
      disabled: true,
    });
    this.inputFechaDevolucion = new FormControl({
      value: this.dataPrestamo.Fecha_devolucion,
      disabled: true,
    });
    this.inputComentarios = new FormControl({
      value: this.dataPrestamo.Comentarios,
      disabled: true,
    });
  }
  setStep(index: number) {
    this.step = index;
  }

  addArticulo(articulo: pArticulo) {
    let found = this.articulosArray_r.find((x) => x.id === articulo.id);
    //console.log(found);
    if (found) {
      console.log('+++++++');
      if (articulo.cantidad < found.cantidad) {
        articulo.cantidad = articulo.cantidad + 1;
      }
    }
  }

  removeArticulo(articulo: pArticulo) {
    if (articulo.cantidad >= 1) {
      articulo.cantidad = articulo.cantidad - 1;
    }
   
  }

  closeModal(){
    this.activeModal.close(this.dataPrestamo);
  }
  Close(){
    this.activeModal.close();
  }
}
