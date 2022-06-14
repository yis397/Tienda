import { Box, Grid } from '@mui/material'

import CardProduct from './CardProduct';


export const ProductList=()=> {

  return (
    <Box sx={{width:"95vw",
    marginTop:10,
    padding:0,
    justifyContent:"center",
    alignItems:"center",
    paddingLeft:7}}>

    <Grid container spacing={4}>
        {
            [1,2,3,4,5,6,7,8].map(e=> (
                <CardProduct 
                    key={ e }   
                />
            ))
        }
    </Grid>
    </Box>
  )
}