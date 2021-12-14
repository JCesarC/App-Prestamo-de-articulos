export interface Articulo{
    id:number;
    descripcion:string;
    estatus:string;
    codigo:string;
    cantidad:number;
    stock:number;
}

export interface ArticuloResponse{
    Descripcion:string;
    Estatus:string;
    Codigo:string;
    Stock:number;
}
