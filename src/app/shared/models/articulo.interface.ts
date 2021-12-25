export interface Articulo{
    id:number;
    Descripcion:string;
    Estatus:string;
    Codigo:string;
    Cantidad:number;
    Stock:number;
}

export interface ArticuloResponse{
    Descripcion:string;
    Estatus:string;
    Codigo:string;
    Stock:number;
}
