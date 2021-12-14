export interface Articulo{
    id:number;
    descripcion:string;
    estatus:string;
    codigo:string;
    stock:number;
}

export interface ArticuloResponse{
    id:number;
    Descripcion:string;
    Estatus:string;
    Codigo:string;
    Cantidad:number;
    Stock:number;
}
