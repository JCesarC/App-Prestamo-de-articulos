import { Categoria } from './categoria.interface';

export interface Articulo {
  id: number;
  Descripcion: string;
  Estatus: string;
  Codigo: string;
  Cantidad: number;
  Categoria: Categoria;
  Stock: number;
}

export interface ArticuloResponse {
  Descripcion: string;
  Estatus: string;
  Codigo: string;
  Stock: number;
  Categoria: Categoria;
}
