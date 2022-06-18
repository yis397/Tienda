import { Box, Grid } from '@mui/material'
import { IProducto } from '../../interfaces';

import CardProduct from './CardProduct';

interface Prop{
  product:any[]
}
export const ProductList=({product}:Prop)=> {

  return (
    <Box sx={{width:"95vw",
    marginTop:10,
    padding:0,
    justifyContent:"center",
    alignItems:"center",
    paddingLeft:7}}>

    <Grid container spacing={4}>
        {
           (product.length!=0?product:[1,2]).map((e,i)=> (
                <CardProduct 
                    key={i}  
                />
            ))
        }
    </Grid>
    </Box>
  )
}