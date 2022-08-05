import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export const Cards = () =>  {
    return (
    <Card sx={{ maxWidth: 345, marginBottom: '10px', marginLeft: '60px'}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://images.squarespace-cdn.com/content/v1/5a71982251a58444f34e4e85/1541655205470-DY6R89JKF0CB8BTPR1BG/IMG_4443-Edit-1-4.jpg?format=2500w"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Title of work shop
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Info matching about the work shops
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy</Button>
      </CardActions>
    </Card>
    );
}





