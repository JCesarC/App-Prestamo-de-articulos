import { user } from './user.interface';

export interface Prestamo {
    id: number;
    MatriculaCodigo: string;
    Nombres: string;
    Estatus: boolean;
    createdAd: string;
    Fecha_prestamo: string;
    Hora: string;
    Fecha_limite: string;
    Fecha_devolucion: string;
    Comentarios: string;
    user: user;
    articulosPrestamo: particulo[];


}
export interface particulo {
  id: number;
  cantidad: number;
}

export interface prestamoResponse {
    articulosId:string;
    cantidadArticulos:string;
    userId:number;
    fecha_limite:string;
}
