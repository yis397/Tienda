import type { NextPage } from 'next'
import HomeLayout from '../components/layout/HomeLayout';
import { Swiper } from '../components/ui';
import { ProductList } from '../components/productos';
import { Q_PRODUCTOS } from '../interfaces';
import { useEffect } from 'react';
import { domainToASCII } from 'url';
import { useQuery } from '@apollo/client';

const Home: NextPage = () => {
  const {data,loading}=useQuery(Q_PRODUCTOS)
  console.log(data);

  
  return (
    <HomeLayout titulo='Tienda-Home' descripcion='una pagina para comprar muchas cosas'>
      <>
      <Swiper/>
      <ProductList/>
      </>
    </HomeLayout>
  )
}

export default Home
