import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.scss']
})
export class NuevoUsuarioComponent implements OnInit {
  rol: 'Estudiante' | 'Administrativo' | 'Otro' = 'Estudiante'
  constructor() { }

  ngOnInit(): void {
  }

}
