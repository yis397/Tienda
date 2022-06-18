import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Typography from '@mui/material/Typography';
import { IconButton, Link } from '@mui/material';
import NextLink from 'next/link';
interface Prop{
  key:number
}
const CardProduct=({key}:Prop)=> {
  return  (
    <Card sx={{ maxWidth: 300,maxHeight:500,marginLeft:1,marginTop:10}}>
  
      <NextLink href={"*"} passHref prefetch={ false } >
        <Link>

      <CardMedia
        sx={{'&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],}}}
        component="img"
        alt="green iguana"
        height="300"
        image="https://http2.mlstatic.com/D_Q_NP_694631-MLM50146737457_052022-AB.webp"
      />


        </Link>
      </NextLink>

  
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {key}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
      <FavoriteIcon />
    </IconButton>
        
      </CardActions>
    </Card>
  );
}

export default CardProduct