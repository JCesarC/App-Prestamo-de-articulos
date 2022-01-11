import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';

import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { User, userResponse } from '@app/shared/models/user.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../user.service';
import { RolService } from '../rol.service';
import { ModalEditComponent } from '../modal-edit/modal-edit.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-usuarios',
  templateUrl: './all-usuarios.component.html',
  styleUrls: ['./all-usuarios.component.scss'],
})
export class AllUsuariosComponent implements OnInit, AfterViewInit {
  searchKey: string;
  displayedColumns: string[] = [
    'id',
    'Nombres',
    'Apellidos',
    'Matricula',
    'Rol',
    'Accion',
  ];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort = new MatSort();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private userSvc: UserService,
    public modalService: NgbModal,
    private rolSvc: RolService
  ) {
    this.userSvc.getAll().subscribe((dataUsers) => {
      this.dataSource = new MatTableDataSource(dataUsers);
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

  async editModal(element: User) {
    let rols = await this.rolSvc.getAll().toPromise();
    if (rols) {
      const modalRef = this.modalService.open(ModalEditComponent, {
        scrollable: true,
        size: 'lg',
      });
      modalRef.componentInstance.dataRol = rols;

      modalRef.componentInstance.dataUser = element;
      modalRef.componentInstance.rol = element.rol.rol;

      modalRef.result.then(async (result: userResponse) => {
        if (result) {
          let res = await this.userSvc
            .updateUser(element.id, result)
            .toPromise();

          if(res){
            this.showConfirmado(res.message)
          }
        }
      });
    }
  }

  async deleteUser(element: User) {
    console.log(element);

    let res = await this.userSvc.deleteUser(element.id).toPromise();

    if (res) {
      console.log(res);
      this.showConfirmado('Se ha eliminado un usuario');
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
