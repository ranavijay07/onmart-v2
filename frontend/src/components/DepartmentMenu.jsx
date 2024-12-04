import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Grow from '@mui/material/Grow';
import { Link } from 'react-router-dom';

const DepartmentMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedDepartment, setSelectedDepartment] = React.useState('');

  const departments = [
    {
      name: 'Furniture',
      categories: ['Bookcases', 'Chairs', 'Tables']
    },
    {
      name: 'Grocery',
      categories: ['Dairy', 'Beans', 'Pasta', 'Paper products', 'Cleaning supplies']
    },
    {
      name: 'Office Supplies',
      categories: ['Desk Supplies', 'Filing Supplies', 'Paper & Pads', 'Binding Supplies', 'Stationery Supplies']
    },
    {
      name: 'Clothing',
      categories: ['Shoes', 'Socks', 'Dresses', 'Jackets', 'Shorts', 'Shirts']
    },
    {
      name: 'Electronics',
      categories: ['Computers', 'TV', 'Phones', 'Sound System']
    },
    {
      name: 'Appliances',
      categories: ['Refrigerators', 'Dishwashers', 'Microwaves', 'Washers', 'Dryers']
    }
  ];

  const handleClick = (event, department) => {
    setAnchorEl(event.currentTarget);
    setSelectedDepartment(department);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedDepartment('');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: 'white'}}>
        <Toolbar >
          {departments.map((department) => (
            <React.Fragment key={department.name}>
              <Button
                color="inherit"
                sx={{
                  mr: 3,
                  textTransform: 'none',
                  fontFamily: 'inherit',
                  fontSize: 'inherit',
                  color: '#0077b6'
                }}
                onClick={(event) => handleClick(event, department.name)}
              >
                {department.name}
              </Button>
              <Menu
                id={`${department.name}-menu`}
                anchorEl={anchorEl}
                open={selectedDepartment === department.name}
                onClose={handleClose}
                TransitionComponent={Grow}
                sx={{
                  '& .MuiMenu-list': {
                    width: 200, // Set static width for the menu
                  },
                  '& .MuiMenuItem-root': {
                    fontFamily: 'inherit', // Use same font as buttons
                    color: '#0077b6', // Default font color
                    '&:hover': {
                      color: 'white',
                      bgcolor: '#0077b6', // Background color on hover
                    },
                  },
                  '& .MuiDivider-root': {
                    backgroundColor: '#0077b6', // Divider color
                  },
                }}
              >
                {department.categories.map((category, index) => (
                  <MenuItem key={category} onClick={handleClose} sx={{ margin: '5px 0' , fontFamily: 'inherit', color: '#0077b6'}}>
                    <Link to={`/category/${category}`} style={{ textDecoration: 'none', color: 'inherit' }}>{category}</Link>
                    {index !== department.categories.length - 1 && <hr />}
                  </MenuItem>
                ))}
              </Menu>
            </React.Fragment>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default DepartmentMenu;
