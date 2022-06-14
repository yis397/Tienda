import type { NextPage } from 'next'
import HomeLayout from '../components/layout/HomeLayout';
import { Swiper } from '../components/ui';
import { ProductList } from '../components/productos';

const Home: NextPage = () => {
  
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
