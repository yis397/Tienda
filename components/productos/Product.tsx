import React from 'react'
import { Box, Button, Card, CardContent, CardMedia, Typography,IconButton } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Disponible } from '../ui';
export const Product=()=> {
  return (
    <Box sx={{with:"100vw",height:"90vh",paddingTop:15,position:"relative"}}>
    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ ml: 5 }}>
      <ArrowBackIcon />
    </IconButton>
    <Card sx={{ display: 'flex' }}>
      <CardMedia
          component="img"
          sx={{ width: 500,ml:"15%" }}
          image="https://compass-ssl.xbox.com/assets/b0/d1/b0d1a50f-1d0c-4e39-9fe7-158dd64dd0bd.png?n=XBX-CMP-L-Console_Large-T_02.png"
          alt="xbox"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column'}}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h3">
              Xbox Series s
            </Typography>
            <Typography variant="h4" color="text.secondary" component="div">
              Microsoft
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              $7,500.00
            </Typography>
            <Typography variant="body2" color="text.secondary" component="div">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa dolorem dolor nemo alias, hic eveniet minus facilis pariatur laudantium, molestias cupiditate ducimus amet? Nihil ea sunt, molestias asperiores quae voluptatibus!
            </Typography>
            <Typography variant="subtitle2" color="text.secondary" component="div" sx={{marginTop:1}}>
              Disponibles:  4
            </Typography>
            <Disponible/>
            <Button variant="contained"  size="large" sx={{fontSize:10,backgroundColor:"coral",height:50}}><h3>Comprar</h3></Button>
          </CardContent>
        </Box >
        
      </Card>

    </Box>
  )
}

