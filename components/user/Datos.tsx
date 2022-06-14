import React from 'react'
import { Box ,TextField,Typography,OutlinedInput,Button} from '@mui/material'

export const Datos=()=> {
  return (
       <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>

      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
         padding:5,
         background:"white",
         height:"80vh",
         width:"80vw"
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant='h2' sx={{paddingBottom:5}}>
        Ingrese sus Datos de Envio
      </Typography>
        
        <div>

         <TextField
         helperText=" "
         id="demo-helper-text-aligned-no-helper"
         label="Nombre"
        />
        <TextField
         helperText=" "
         id="demo-helper-text-aligned-no-helper"
         label="Apellido"
        />
        </div>
        <div>

         <TextField
         helperText=" "
         id="demo-helper-text-aligned-no-helper"
         label="Pais"
        />
        <TextField
         helperText=" "
         id="demo-helper-text-aligned-no-helper"
         label="Ciudad"
        />
        <TextField
         helperText=" "
         id="demo-helper-text-aligned-no-helper"
         label="C.p"
        />
        </div>
        <TextField 
          id="demo-helper-text-aligned-no-helper"
          label="Calle completa"
          fullWidth
        />
       <Box sx={{weight:"100vw",height:20,display:"flex",justifyContent:"center",alignItems:"center",marginTop:5}}>
    <Button variant="contained"  size="large" sx={{fontSize:10,backgroundColor:"coral",height:50}}><Typography variant="button">
        Confirmar  Datos</Typography></Button>
    </Box>
     
    </Box>
       </Box>

  )
}
