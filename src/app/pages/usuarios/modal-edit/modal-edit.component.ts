import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Rol } from '@app/shared/models/rol.interface';
import { User, userResponse } from '@app/shared/models/user.interface';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss']
})
export class ModalEditComponent implements OnInit {
  @Input() public rol: string;
  @Input() public dataUser:User
  @Input() public dataRol:Rol[]
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

  constructor(public activeModal:NgbActiveModal, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.userInfo.get('userMatricula').setValue(this.dataUser.MatriculaCodigo);
    this.userInfo.get('userNombres').setValue(this.dataUser.Nombres);
    this.userInfo.get('userApellidos').setValue(this.dataUser.Apellidos);

  }

  updateUser(){
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
    this.activeModal.close(newUser)
  }

}
