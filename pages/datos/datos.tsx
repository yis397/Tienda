import React from 'react'
import HomeLayout from '../../components/layout'
import { Datos } from '../../components/user'

 const DatosPage=()=> {
  return (
    <HomeLayout titulo={'datos'} descripcion={'datos'}  >
      <Datos/>
    </HomeLayout>
  )
}
export default DatosPage
