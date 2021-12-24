import { rol } from "./rol.interface";

export interface User{
    id:number;
    Nombres:string;
    Apellidos:string;
    MatriculaCodigo:string;
    rol:rol
}

export interface userResponse{
    
    Nombres:string;
    Apellidos:string;
    MatriculaCodigo:string;
    rol:rol;
}