import React from 'react'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

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
            <BottomNavigationAction label="Social" icon={<RestoreIcon />} sx={{ ml: 120, }}  />
            <BottomNavigationAction label="Social" icon={<FavoriteIcon />}/>
            <BottomNavigationAction label="Social" icon={<FavoriteIcon />}/>
            
            
            </BottomNavigation>
        </Box>
    </div>
    );
}



