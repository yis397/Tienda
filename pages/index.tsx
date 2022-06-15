import type { NextPage } from 'next'
import HomeLayout from '../components/layout/HomeLayout';
import { Swiper } from '../components/ui';
import { ProductList } from '../components/productos';
import { Q_PRODUCTOS } from '../interfaces';
import useGraph from '../hooks/useGraph';

const Home: NextPage = () => {
  const {data,loading}=useGraph({tipo:"q",gql:Q_PRODUCTOS } )
  
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
