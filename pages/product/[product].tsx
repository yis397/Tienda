import React,{useEffect} from 'react'
import { GetServerSideProps, GetStaticPaths, GetStaticProps,NextPage } from 'next';
import { gql, useQuery } from '@apollo/client';
import HomeLayout from '../../components/layout/HomeLayout'
import { Product } from '../../components/productos';
import { request } from "graphql-request";
import { Q_PRODUCTBYSLUG } from '../../interfaces/query';
import { IProducto } from '../../interfaces/models';
interface Prop{
  products:IProducto
}

const ProductPage:NextPage<Prop>=({products})=>{
  console.log(products._id);
  
  
  return (
    <HomeLayout titulo={'asd'} descripcion={'asd'} >
    <Product/>
    </HomeLayout>
  )
}


const Q_SLUGSs=gql`
    query GetProducSlug{
      getProducSlug{
        slug
      }
    }
`;

export const getStaticPaths:GetStaticPaths=async(ctx) =>{
  const res:any = await request("http://localhost:3000/api/graphql",Q_SLUGSs);
 
  
  const paths = res.getProducSlug.map(({slug}:any) =>({
    params: {product: slug}
  }))
 

return {
    paths,
    fallback: false
}
  

}


export const getStaticProps: GetStaticProps = async ({params}) => {
  const { product = '' } = params as { product: string };
  const res:any = await request("http://localhost:3000/api/graphql",Q_PRODUCTBYSLUG,{
    slug:product
  });
  
  const products =res.getProductBySlug

  if ( !products ) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 24
  }
}

export default ProductPage


