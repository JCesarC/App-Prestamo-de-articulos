import { Articulo } from './articulo.interface';
import { User } from './user.interface';

export interface Prestamo {
  id: number;
  MatriculaCodigo: string;
  Nombres: string;
  Estatus: string;
  createdAd: string;
  Fecha_prestamo: string;
  Hora: string;
  Fecha_limite: string;
  Fecha_devolucion: string;
  Comentarios: string;
  user: User;
  articulosPrestamo: pArticulo[];
}
export interface pArticulo {
  id: number;
  Articulo: Articulo;
  cantidad: number;
}

export interface prestamoResponse {
  articulosId: string;
  cantidadArticulos: string;
  userId: number;
  fecha_limite: string;
  comentarios: string;
}

export interface prestamoUpdate {
  articulosId: string;
  cantidadArticulos: string;
  Estatus: string;
  Fecha_devolucion: string;
  Comentarios: string;
}
