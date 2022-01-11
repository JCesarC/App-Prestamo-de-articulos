import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { MatTable, MatTableDataSource } from '@angular/material/table';

import { Sort } from '@angular/material/sort';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { UserService } from './user.service';
import { User } from '@app/shared/models/user.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent implements OnInit {
  activo = 'Usuarios';

  constructor() { }


  ngOnInit(): void {

  }


  
}
