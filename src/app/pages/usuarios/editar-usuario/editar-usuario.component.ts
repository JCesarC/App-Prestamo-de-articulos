import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent implements OnInit {
  rol: 'Estudiante' | 'Administrativo' | 'Otro' = 'Estudiante'

  constructor() { }

  ngOnInit(): void {
  }

}
