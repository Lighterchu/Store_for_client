import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import {Button} from 'react-bootstrap'
import {NavgationBar} from './components/Navbar';
import {BottomLinks} from './components/BottomLinks';
import Typography from '@mui/joy/Typography';
import Button from '@mui/material/Button';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';





function App() {
  
  return (
    <div className="App">
      <header className="App-header">
      <div className="App-info" style={{color: "white"}}>
      <Typography>This is a ProtoType</Typography>
      </div>
      <NavgationBar/>
        <div className="App-info" style={{color: "white"}}>
          {/* <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
        </ImageList> */}
        <Box
        component="img"
        sx={{
          height: 900,
          width: 1450,
          maxHeight: { xs: 900, md: 900 },
          maxWidth: { xs: 500, md: 1500 }
        }}
        alt="The house from the offer."
        src="https://images.squarespace-cdn.com/content/v1/5a71982251a58444f34e4e85/1541655205470-DY6R89JKF0CB8BTPR1BG/IMG_4443-Edit-1-4.jpg?format=2500w"
      />
        
         <Typography>
          Photographer | Explorer
          Based in Warrnambool, Victoria, Josh has the one of the most spectacular coastlines on his door step - the Great Ocean Road. 
          With his love for travel and capturing the beauty around him, Josh has a diverse range of landscape photographs guaranteed to catch the eye.
          Other specialty services include - Real Estate and Wedding photography.
          </Typography> 
          
          <Button variant="contained" color="success">
            Browse Galley
          </Button>
          <p></p>
          <p></p>
          <p></p>
          <Divider />
          <br/>
          <p></p>
          
        </div>
      </header>
      
      <footer>
        <BottomLinks/>
      </footer>
    </div>
  );
}

export default App;

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  
];