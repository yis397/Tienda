import { Box,TextField,Grid,Chip,Button,Typography, Link } from '@mui/material'
import React,{useState,useContext} from 'react'
import NextLink from 'next/link';
import { useForm } from 'react-hook-form';
import { ILogin ,IMsg, M_LOGINUSUARIO} from '../../interfaces';

import { AuthContext } from '../../context';
import { useRouter } from 'next/router';



export const Login=()=> {
    const { register, handleSubmit, formState: { errors } } = useForm<ILogin>();
    const {logins} = useContext(AuthContext);
    const ruta=useRouter()
    const  [error, seterror] = useState<IMsg>({valor:"",estado:""});
    const registrar=async(datos:ILogin)=>{
           const data:Promise<IMsg>=logins(datos)
           data.then(e=>{
            seterror({...error,valor:e.valor,estado:e.estado})
           })
           setTimeout(() => {
            ruta.push('/')
           }, 1000);
    }
  return (
    <Box sx={{height:"60vh",width:"50vw",background:"coral",borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center"}}>
        
        <form  noValidate onSubmit={handleSubmit(registrar)}>
                <Box sx={{ width: 350, padding:'10px 20px',background:"white",borderRadius:10}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant='h1' component="h1">Iniciar Sesión</Typography>
                            {
                            error.valor.length!=0?<Grid item xs={12}>
                            <Chip 
                                label={error.valor}
                                color={
                                    error.estado=="0"?"error":"success"
                                }
                                className="fadeIn"
                            />
                        </Grid>:null
                        }
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                type="email"
                                label="Correo"
                                variant="filled"
                                fullWidth 
                                {...register('correo',{
                                    required:'Campo requerido'
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
                                href={ "/auth/register" } 
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
