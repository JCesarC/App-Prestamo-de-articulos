import { Rol } from "./rol.interface";

export interface User{
    id:number;
    Nombres:string;
    Apellidos:string;
    MatriculaCodigo:string;
    rol:Rol
}

export interface userResponse{
    
    nombres:string;
    apellidos:string;
    matriculaCodigo:string;
    rol:Rol;
}