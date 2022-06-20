import { gql } from '@apollo/client';

export const Q_PRODUCTOS=gql`
    query GetProductos{
      getProductos{
        id
        nombre
        precio
      }
    }
`;
export const Q_SLUGS=gql`
    query GetProducSlug{
      getProducSlug{
        slug
      }
    }
`;
export const Q_PRODUCTBYSLUG=gql`
    query GetProductBySlug($slug: String){
      getProductBySlug(slug: $slug){
        _id
        nombre
        cantidad
        precio
        img
        marca
        tags
        slug
      }
    }
`;