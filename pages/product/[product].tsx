import { GetServerSideProps } from 'next';
import React from 'react'
import HomeLayout from '../../components/layout/HomeLayout'
import { Product } from '../../components/productos';

const ProductPage=()=>{
  return (
    <HomeLayout titulo={'asd'} descripcion={'asd'} >
    <Product/>
    </HomeLayout>
  )
}
export default ProductPage



export const getServerSide:GetServerSideProps=async({params}) =>{
   
  const {product=''}=params as {product:string}
  const producto=0;
  if (producto) {
    return{
      redirect:{
        destination:'/',
        permanent:false
      }
    }
  }
  return{ 
    props:{
      producto
    }}
  
}

