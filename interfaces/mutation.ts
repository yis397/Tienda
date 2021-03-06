import { gql } from '@apollo/client';
//usuario
export const M_NEWUSUARIO=gql`
mutation nuevoUsuario($input: UsuarioInput) {
    nuevoUsuario(input: $input) {
        nombre
        apellido
        correo
        
    }
  }
`;
export const M_UPDATEUSUARIO=gql`
mutation Mutation($input: UpdateUsuario) {
    updateUsuario(input: $input) {
        nombre
        apellido
        direccion
    }
  }
`;

export const M_LOGINUSUARIO=gql`
mutation loginUsuario($input: AuthInput) {
  loginUsuario(input: $input) {
        token
    }
  }
`;

//producto
export const M_NEWPRODUCT=gql`
mutation NuevoProducto($input: inputProducto) {
    nuevoProducto(input: $input) {
        nombre
        cantidad
        precio
        marca
        tags
        img
    }
  }
`;

export const M_UPDATEPRODUCT=gql`
mutation UpdateProducto($updateProductoId: ID!) {
    updateProducto(id: $updateProductoId) {
        nombre
        cantidad
        precio
        marca
        tags
        img
    }
  }
`;

export const M_DELETPRODUCT=gql`
mutation UpdateProducto($deletProductoId: ID!) {
    deletProducto(id: $deletProductoId) {
        id
    }
  }
`;