import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: '#333', top: 'auto', bottom: 0 }}>
        <Toolbar>
          <Typography variant="body1" component="div" sx={{ flexGrow: 1, color: 'white', textAlign: 'center' }}>
            &copy; 2024 OnMart Superstore. All rights reserved.
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Footer;
