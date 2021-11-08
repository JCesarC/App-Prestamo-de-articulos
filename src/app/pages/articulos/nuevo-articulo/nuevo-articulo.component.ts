import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo-articulo',
  templateUrl: './nuevo-articulo.component.html',
  styleUrls: ['./nuevo-articulo.component.scss']
})
export class NuevoArticuloComponent implements OnInit {
  consumible = false;
  posConsumible : 'before' | 'after' = 'before';
  constructor() { }

  ngOnInit(): void {
  }

}
