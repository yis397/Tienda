import { gql } from "apollo-server-micro";

const typeDefs=gql`
"""Usuario"""
 type Usuario{
     id:ID
     nombre:String
     apellido:String
     correo: String
     creado:String
     direccion:String
     estado:Boolean
     carrito:[String]
 }
 input UsuarioInput{
    nombre:String!
    apellido:String!
    correo: String!
    password:String!
 }
 input AuthInput{
        correo: String!
        password: String!
    }
input UpdateUsuario{
     nombre:String
     apellido:String
     direccion:String
    }
 type Token{
     token:String
 }
"""Producto"""
 type Producto{
    _id:ID,
    nombre:String,
    cantidad:Int,
    precio:Float,
    img:String,
    vendedor:String,
    marca:String,
    tags:Tags,
    slug:String
 }
  enum Tags{
   
    electronica,ropa,alimentos
 }
 input inputProducto{
    nombre:String!,
    cantidad:Int!,
    precio:Float!,
    marca:String!,
    tags:Tags!,
    img:String,
    descripcion:String!
 } 
 type Slug{
    slug:String
 }
  type Query{
      getUsuarioToken(token:String):Usuario
      
      
      #productos
      getProductos:[Producto]
      getProducto(id:ID!):Producto
      getProductBySlug(slug:String):Producto
      getProducSlug:[Slug]
  }
  type Mutation{
      """usuario"""
      nuevoUsuario(input:UsuarioInput):Usuario
      loginUsuario(input:AuthInput):Token
      updateUsuario(input:UpdateUsuario):Usuario
      """producto"""
      nuevoProducto(input:inputProducto):Producto
      updateProducto(id:ID!,input:inputProducto):Producto
      deletProducto(id:ID!):String
  }
`
export default typeDefs;