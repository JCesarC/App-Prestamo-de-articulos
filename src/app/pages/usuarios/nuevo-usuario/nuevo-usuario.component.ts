import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Rol } from '@app/shared/models/rol.interface';
import { RolService } from '../rol.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';

import { userResponse } from '@app/shared/models/user.interface';
import { UserService } from '../user.service';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.scss'],
})
export class NuevoUsuarioComponent implements OnInit {
  dataRol: Rol[] = [];
  rol: string;
  constructor(
    private rolSvc: RolService,
    private userSvc: UserService,
    private fb: FormBuilder
  ) {}

  userInfo = this.fb.group({
    userMatricula: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(60),
      ]),
    ],
    userNombres: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(60),
      ]),
    ],
    userApellidos: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(60),
      ]),
    ],
  });

  ngOnInit(): void {
    this.getDataRol();
  
  }

  public validRols() {
    return (control: FormControl) => {
      if (this.dataRol.length === 0) {
        return { emptyRols: 'not rols' };
      }
      return null;
    };
  }

  async getDataRol() {
    let result = await this.rolSvc.getAll().toPromise();

    if (result) {
      this.dataRol = result;
      this.rol = this.dataRol[0].rol;
    }
  }

  async saveUser() {
    let matricula = this.userInfo.get('userMatricula').value;
    let nombres = this.userInfo.get('userNombres').value;
    let apellidos = this.userInfo.get('userApellidos').value;
    let rolSelected = this.dataRol.find((x) => x.rol === this.rol);

    let newUser: userResponse = {
      nombres: nombres,
      apellidos: apellidos,
      matriculaCodigo: matricula,
      rol: rolSelected,
    };

    console.log(newUser);

    let result = await this.userSvc.newUser(newUser).toPromise();
    if (result.message === 'Usuario creado') {
      this.showConfirmado('Usuario creado correctamente');
      console.log(result);
    } else {
      console.log('errorrrrs');
    }

    console.log(nombres);
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

