import { Box, Button,Typography} from '@mui/material'
import React from 'react'

export const Disponible=()=>{
  return (
    <Box sx={{flexDirection:"row",display:"flex",justifyContent:"space-between",marginTop:3,marginBottom:4}}>
              <Button variant="contained" sx={{fontSize:10,backgroundColor:"GrayText"}}><h3>Menos</h3></Button>
              <Typography variant="subtitle1" color="text.secondary" component="div">
              ( 4 )
              </Typography>
              <Button variant="contained" sx={{fontSize:10,backgroundColor:"GrayText"}}><h3>Mas</h3></Button>
            </Box>
  )
}
