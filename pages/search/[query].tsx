import React from 'react'
import HomeLayout from '../../components/layout/HomeLayout'
import { ProductList } from '../../components/productos/ListaProduct';

 const BusquedaPage=()=> {
  return (
    <HomeLayout titulo={'products'} descripcion={'Productos buscados'} >
        <ProductList/>
        
    </HomeLayout>
  )
}
