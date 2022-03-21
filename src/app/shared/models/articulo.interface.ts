import { Categoria } from './categoria.interface';
import { Ubicacion } from './ubicacion.interface';

export interface Articulo {
  id: number;
  Descripcion: string;
  Estatus: string;
  Codigo: string;
  Cantidad: number;
  Consumible: boolean;
  Categoria: Categoria;
  Ubicacion: Ubicacion;
  Stock: number;
  ReferenciaUbicacion: string;
}

export interface ArticuloResponse {
  Descripcion: string;
  Estatus: string;
  Codigo: string;
  Consumible: boolean;
  Stock: number;
  Categoria: Categoria;
  Ubicacion: Ubicacion;
  ReferenciaUbicacion: string;
}
