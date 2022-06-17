export interface IUser {
    id      : string;
    nombre     : string;
    apellido     : string;
    correo    : string;
    password?: string;
    rol?    : string;
    estado?:boolean;
    creado ?  :string;
    direccion?:string;
    carrito?:string[]
}
export interface IProducto{
    id:string,
    nombre:string,
    cantidad:number,
    precio:number,
    img?:string,
    vendedor:string,
    marca:string,
    tags:tags
}
type tags=
    |"electronica"
    |"ropa"
    |"alimentos"
