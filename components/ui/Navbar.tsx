import React,{useContext,useEffect}from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import {InputBase,Menu,MenuItem,Box} from '@mui/material';
import { AuthContext } from '../../context';
import { fontSize } from '@mui/system';



const Navbar=()=> {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const {isLoggedIn,user} = useContext(AuthContext);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  
  return (

    <AppBar position="static" sx={{position:"fixed"}}>
  <Toolbar variant="dense"  sx={{ justifyContent:"space-between"}} >
    <div>
    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={handleMenu}>
      <MenuIcon />
    </IconButton>
    <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                
                
                
                {
                  isLoggedIn?
                  <Box>
                    <MenuItem onClick={handleClose}>Cerrar Secion</MenuItem><MenuItem onClick={handleClose}>My Direccion</MenuItem>
                    <MenuItem onClick={handleClose}>Favoritos</MenuItem>

                  </Box>
                  :<Box>
                    <MenuItem onClick={handleClose}>Registrate</MenuItem>
                    <MenuItem onClick={handleClose}>Inciar Secion</MenuItem>
                  </Box>
                }
                
              </Menu>

    </div>

     
     {
      isLoggedIn?<Typography>Hola:{user?.nombre}</Typography>:null
     }
    <InputBase
        sx={{ ml: 1, flex: 1,backgroundColor:"white",borderRadius:30,paddingLeft:5}}
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="submit" color="inherit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>

    <IconButton edge="end"  color="inherit" aria-label="menu" sx={{ mr: 5,}}>
      <ShoppingCartIcon />
    </IconButton>
  </Toolbar>
</AppBar>

  )
}

export default Navbar






