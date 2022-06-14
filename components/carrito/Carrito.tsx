import React from 'react'
import { Disponible } from '../ui'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import {ButtonBase,CardMedia,Box,IconButton,Button} from '@mui/material';

export const Carrito=()=> (
    <Box sx={{paddingTop:10,display:"flex",justifyContent:"space-between",flexDirection:"column"}}>
        <CardItem/>
        <CardItem/>
        <CardItem/>
    <Box sx={{weight:"100vw",height:20,display:"flex",justifyContent:"center",alignItems:"center",marginTop:5}}>
    <Button variant="contained"  size="large" sx={{fontSize:10,backgroundColor:"coral",height:50}}><Typography variant="button">
        Realizar Compra</Typography></Button>
    </Box>
    </Box>
)



const CardItem=()=> {
  return (
    <Paper
      sx={{
        maxWidth: "100vw",
        flexGrow: 1,
        marginBottom:5
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={4} sx={{alignItems:"center",display:"flex",justifyContent:"center"}}>
          <ButtonBase sx={{ width: 128, height: 128 }}>
           <CardMedia
        sx={{'&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],}}}
        component="img"
        alt="green iguana"
        height="150"
        image="https://http2.mlstatic.com/D_Q_NP_694631-MLM50146737457_052022-AB.webp"
      />
          </ButtonBase>
        </Grid>

        <Grid item xs={4} sm container>
          <Grid item xs container direction="column" spacing={2}>
            
            <Grid item xs sx={{alignItems:"center",display:"flex",justifyContent:"center"}}>
             
              <Disponible/>
              <Typography variant="subtitle2" component="div">
              x  $19.00
            </Typography>
            </Grid>
            <Typography variant="subtitle2" component="div">
              Producto:
            </Typography>
          </Grid>
          <Grid item xs={4} sx={{alignItems:"center",display:"flex",justifyContent:"center"}}>
            <Typography variant="subtitle1" component="div">
              Total: 
            </Typography>
          </Grid>
          
        </Grid>
        <Grid item xs={4} sx={{alignItems:"center",display:"flex",justifyContent:"center"}}>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
      <DeleteIcon />
         </IconButton>
          </Grid>
      </Grid>
    </Paper>
  )
}
