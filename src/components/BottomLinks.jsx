import React from 'react'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

;

export const BottomLinks = () =>  {
    const [value, setValue] = React.useState(0);

    return (
    <div>
        <Box sx={{ width: 500 }}>
            <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            >
            <BottomNavigationAction label="Facebook" icon={<FacebookIcon />} href={"https://www.facebook.com/MattBradfieldPhotographyAustralia"} sx={{ ml: 110, }}  />
            <BottomNavigationAction label="Insta" icon={<InstagramIcon />} href={"https://www.instagram.com/mattbradfieldphotography"} sx={{ ml: 0, }}  />
            <BottomNavigationAction label="Twitter" icon={<TwitterIcon />} href={"https://www.twitter.com/bradfieldphotos"} sx={{ ml: 0, }}  />
   
            
            </BottomNavigation>
        </Box>
    </div>
    );
}



