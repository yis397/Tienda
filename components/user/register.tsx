import React from 'react'
import { Box,TextField,Grid,Chip,Button,Typography, Link } from '@mui/material'
import NextLink from 'next/link';

export  function Register() {
  return (
    <Box sx={{height:"60vh",width:"50vw",background:"coral",borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center"}}>
        
        <form  noValidate>
                <Box sx={{ width: 350, padding:'10px 20px',background:"white",borderRadius:10}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant='h1' component="h1">Vamos.. Registrate</Typography>
                            <Chip 
                                label="No reconocemos ese usuario / contraseña"
                                color="error"
            
                                className="fadeIn"
                    
                            />
                        </Grid>
                        
                        <Grid item xs={12}>
                            <TextField
                                type="text"
                                label="Nombre"
                                variant="filled"
                                fullWidth 
        
                                
                            />
                            </Grid>

                            <Grid item xs={12}>
                            <TextField
                                type="text"
                                label="Apellido"
                                variant="filled"
                                fullWidth 
        
                                
                            />
                            </Grid>
                        <Grid item xs={12}>
                            <TextField
                                type="email"
                                label="Correo"
                                variant="filled"
                                fullWidth 
        
                                
                            />

                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Contraseña"
                                type='password'
                                variant="filled"
                                fullWidth 
                                
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                color="secondary"
                                className='circular-btn'
                                size='large'
                                fullWidth>
                                Ingresar
                            </Button>
                        </Grid>

                        <Grid item xs={12} display='flex' justifyContent='end'>
                            <NextLink 
                                href={ "*" } 
                                passHref>
                                <Link underline='always'>
                                    ¿No tienes cuenta?
                                </Link>
                            </NextLink>
                        </Grid>
                    </Grid>
                </Box>
            </form>
    </Box>
  )
}
