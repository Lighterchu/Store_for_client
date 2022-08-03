import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import {Button} from 'react-bootstrap'
import {NavgationBar} from './components/Navbar';
import {BottomLinks} from './components/BottomLinks';
import {Cards} from './components/Cards';
import Typography from '@mui/joy/Typography';
import Button from '@mui/material/Button';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider'


// import gql from 'graphql-tag';
import { getSubscriptionUrl } from './useGraphQL';
// import Divider from '@mui/material/Divider';
// import Stack from '@mui/material/Slack';


// const GET_SHOPNAME = gql`
//   query {
//     shop {
//       name
//     }
//   }
// `;





function App({client}) {
 
  // const { data, isLoading, error } = useGQLQuery('shop', GET_SHOPNAME)
  // a9a9fbcc0c214d3d0c9913bb10340e24
  // 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
  // console.log(getSubscriptionUrl("a9a9fbcc0c214d3d0c9913bb10340e24"))

  
  
  return (
    <div className="App">
      <header className="App-header">
      <div className="App-info" style={{color: "white"}}>
      <Typography>This is a live site</Typography>
      </div>
      <NavgationBar/>
        <div className="App-info" style={{color: "white"}}>
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
          please fill me in, I am you're description
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
          
          {/* <Stack spacing={2}>
            
          </Stack> */}
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)'}}>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
          </Box>
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