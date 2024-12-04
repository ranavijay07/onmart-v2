import * as React from 'react';
import { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 10,
  width: '50%', // Set width to 100% of the parent container
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Header = ({ cart }) => {
  const cartQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const [open, setOpen] = useState(false);

  const isLogged = localStorage.getItem('isLogged') === 'true';
  const username = localStorage.getItem('username');

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleLoginLogout = () => {
    if (isLogged) {
      localStorage.clear(); // Clear local storage if logged in
      window.location.reload(); // Reload the page
    } else {
      window.location.href = '/signin'; // Redirect to login page if not logged in
    }
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pr: 1 }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            marginLeft: '15px', 
            marginTop: '15px',
            marginBottom: '15px',
            fontWeight: 'bold',
            fontFamily: 'inherit'
          }}
        >
          Account
        </Typography>
        <IconButton onClick={toggleDrawer(false)} color="inherit">
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List>
         {isLogged && (
          <div>
          <ListItem key='Log Out' disablePadding>
            <ListItemButton onClick={handleLoginLogout}>
              <ListItemText primary='Log Out' />
            </ListItemButton>
          </ListItem>
        <ListItem key='Manage Orders' disablePadding>
        <ListItemButton>
          <Link to='/orders' style={{ textDecoration: 'none', color: 'inherit' }}><ListItemText primary='Manage Orders' /></Link>
        </ListItemButton>
        </ListItem>
        </div>
         )}
          {!isLogged && (
          <div>
          <ListItem key='Sign in' disablePadding>
            <ListItemButton>
              <Link to='/signin' style={{ textDecoration: 'none', color: 'inherit' }}><ListItemText primary='Sign in' /></Link>
            </ListItemButton>
          </ListItem>
          <ListItem key='Create Account' disablePadding>
            <ListItemButton>
            <Link to='/signup' style={{ textDecoration: 'none', color: 'inherit' }}><ListItemText primary='Create an account' /></Link>
            </ListItemButton>
          </ListItem>
          </div>
          )}
        <Divider />
      </List>
    </Box>
  );

  return ( 
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: '#0077b6' }}>
        <Toolbar>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <LocalMallIcon />
            </IconButton>
          </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', fontFamily: 'inherit'}} >
            OnMart Superstore
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search by Products, Categ.."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ ml: 2 }}
            >
              <Badge badgeContent={cartQuantity}><ShoppingCartIcon /></Badge>
              
            </IconButton>
            </Link>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ ml: 2 }}
            onClick={toggleDrawer(true)}
          >
            <Typography variant="button" sx={{ fontFamily: 'inherit', textTransform: 'none' }}>
              {isLogged ? `Welcome ${username} (Logout)` : 'Login'}
            </Typography>
          </IconButton>
          <Drawer open={open} onClose={toggleDrawer(false)} anchor='right'>
            {DrawerList}
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
 
export default Header;
