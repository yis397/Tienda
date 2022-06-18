import type { NextPage } from 'next'
import HomeLayout from '../components/layout/HomeLayout';
import { Loading, Swiper } from '../components/ui';
import { ProductList } from '../components/productos';
import { Q_PRODUCTOS } from '../interfaces';
import { useQuery } from '@apollo/client';

const Home: NextPage = () => {
  const {data,loading}=useQuery(Q_PRODUCTOS)

  
  return (
    <HomeLayout titulo='Tienda-Home' descripcion='una pagina para comprar muchas cosas'>
      {loading?
      <Loading/>
      :<>
      <Swiper/>
      <ProductList product={data.getProductos}/>
      </>
    }
    </HomeLayout>
  )
}

export default Home
