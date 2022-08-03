import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Client from 'shopify-buy';


//testing something
   
    

export const Cards = () => {

    
  return (
    <Card sx=
    {{ maxWidth: 345,
       minWidth: 100,
       marginLeft: 2,
       marginBottom: 10
        
    }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image="https://images.squarespace-cdn.com/content/v1/5a71982251a58444f34e4e85/1541655205470-DY6R89JKF0CB8BTPR1BG/IMG_4443-Edit-1-4.jpg?format=2500w"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Card Title
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Info about the card
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Buy
        </Button>
      </CardActions>
    </Card>
  )
}
