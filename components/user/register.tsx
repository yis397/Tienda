import React,{useState} from 'react'
import { Box,TextField,Grid,Chip,Button,Typography, Link } from '@mui/material'
import NextLink from 'next/link';
import { useForm } from "react-hook-form";
import { DocumentNode, useQuery,useMutation } from '@apollo/client';
import { M_NEWUSUARIO } from '../../interfaces/';
interface IData{
    nombre:string,
    apellido:string,
    correo:string,
    password:string,
    password2:string,
}
export  function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm<IData>();
    const  [error, seterror] = useState({valor:"",color:""});
    const[nuevoUsuario]=useMutation(M_NEWUSUARIO)
    const registrar=async({nombre,apellido,correo,password,password2}:IData)=>{
       if (password.localeCompare(password2)!=0) {
          seterror({valor:"contraseñas invalidas",color:"mal"})
          return;
       }
       try {
           const usuario=await nuevoUsuario({variables:{input:{nombre,apellido,correo,password}}})
           console.log(usuario)
           seterror({valor:"Registrado",color:"bien"})  
       } catch (error:any) {
        seterror({valor:error.message,color:"mal"})
        
       }

    }
  return (
    <Box sx={{height:"60vh",width:"50vw",background:"coral",borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center"}}>
        
        <form  noValidate onSubmit={handleSubmit(registrar)}>
                <Box sx={{ width: 350, padding:'10px 20px',background:"white",borderRadius:10,marginTop:10,paddingTop:5}}>
                    <Grid container spacing={2}>
                        <Typography variant='h1' component="h1" sx={{marginLeft:3}}>    Vamos.. Registrate</Typography>
                        {
                            error.valor.length!=0?<Grid item xs={12}>
                            <Chip 
                                label={error.valor}
                                color={
                                    error.color=="mal"?"error":"success"
                                }
            
                                className="fadeIn"
                    
                            />
                        </Grid>:null
                        }
                        
                        
                        <Grid item xs={12}>
                            <TextField
                                type="text"
                                label="Nombre"
                                variant="filled"
                                fullWidth 
                                {...register('nombre',{
                                    required:'Campo requerido'
                                })}
                                error={!!errors.nombre}
                                helperText={errors.nombre?.message}
                            />
  
                            </Grid>

                            <Grid item xs={12}>
                            <TextField
                                type="text"
                                label="Apellido"
                                variant="filled"
                                fullWidth 
                                {...register('apellido',{
                                    required:'Campo requerido'
                                })}
                                error={!!errors.apellido}
                                helperText={errors.apellido?.message}
                                
                            />
                            </Grid>
                        <Grid item xs={12}>
                            <TextField
                                type="email"
                                label="Correo"
                                variant="filled"
                                fullWidth 
                                {...register('correo',{
                                    required:'Campo requerido',
                                    pattern:/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
                                })}
                                error={!!errors.correo}
                                helperText={errors.correo?.message}
        
                                
                            />

                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Contraseña"
                                type='password'
                                variant="filled"
                                fullWidth
                                {...register('password',{
                                    required:'Campo requerido'
                                })}
                                error={!!errors.password}
                                helperText={errors.password?.message}
                                
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Verifica contraseña"
                                type='password'
                                variant="filled"
                                fullWidth
                                {...register('password2',{
                                    required:'Campo requerido'
                                })}
                                error={!!errors.password2}
                                helperText={errors.password2?.message}
                                
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
