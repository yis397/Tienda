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
