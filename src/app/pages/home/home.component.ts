import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Prestamo } from '@app/shared/models/prestamo.interface';
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

  countUsuarios: number = 0;

  dataPrestamo: Prestamo[];
  datesArray = [];
  counterArray = [];
  today: string;

  constructor(
    private prestamoSvc: PrestamoService,
    private articuloSvc: ArticuloService,
    private usrSvc: UserService
  ) {}
  ngAfterViewInit(): void {
    this.updateEstatus();
  }

  ngOnInit(): void {
    this.getTodayDate();
    forkJoin([
      this.getAllPrestamos(),
      this.getAllUsuarios(),
      this.getAllArticulos(),
    ]).subscribe(([x, y, z]) => {
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
        this.countUsuarios = y.length;
      }
      if (z) {
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
    await this.prestamoSvc.getEstatus().toPromise();
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
}
