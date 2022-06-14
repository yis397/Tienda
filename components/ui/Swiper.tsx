import React from 'react'
import { Box, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
 const Swiper=()=> {
  return (
    <Box
    sx={{width:"98.9vw",height:"40vh",padding:2,background:"coral" }}>
    <Box sx={{justifyContent:"space-between",with:"100vw",display:"flex",marginTop:5}}>

    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
      <ArrowBackIcon sx={{float:"left"}} />
    </IconButton>
    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
      <ArrowForwardIcon sx={{float:"right"}} />
    </IconButton>
    </Box>
    <CardProduct/>

    </Box>
  )
}
export default Swiper;

  const CardProduct=()=> {
  
    return (
      <Card sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column'}}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              Xbox Series s
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Microsoft
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              $7,500.00
            </Typography>
          </CardContent>
        </Box >
        <CardMedia
          component="img"
          sx={{ width: 200,ml:"15%" }}
          image="https://compass-ssl.xbox.com/assets/b0/d1/b0d1a50f-1d0c-4e39-9fe7-158dd64dd0bd.png?n=XBX-CMP-L-Console_Large-T_02.png"
          alt="xbox"
        />
      </Card>
    );
  }