import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const mockBrands = ['Brand A', 'Brand B', 'Brand C', 'Brand D'];
const mockSizes = ['XS', 'S', 'M', 'L', 'XL'];

const FilterDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(100);
  const [brand, setBrand] = useState('Brand A');
  const [size, setSize] = useState('M');
  const [ratingMin, setRatingMin] = useState(0);
  const [ratingMax, setRatingMax] = useState(5);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleDrawerOpen}
        sx={{
          borderRadius: '20px',
          marginRight: '10px',
          marginBottom: '20px',
          backgroundColor: '#0077b6',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#0077b6',
            color: '#fff',
          },
        }}
      >
        Filter
      </Button>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerClose}
        sx={{
          '& .MuiDrawer-paper': {
            width: '300px',
            padding: '20px',
            backgroundColor: '#f0f0f0',
          },
        }}
      >
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '20px',
            }}
          >
            <Typography variant="h6">Filter Options</Typography>
            <IconButton onClick={handleDrawerClose} sx={{ color: '#0077b6' }}>
              <CloseIcon />
            </IconButton>
          </div>
          <Typography variant="subtitle1" gutterBottom>Price Range</Typography>
          <TableContainer>
            <Table size="small">
              <TableBody>
                <TableRow>
                  <TableCell>Min</TableCell>
                  <TableCell>
                    <Select
                      value={priceMin}
                      onChange={(e) => setPriceMin(e.target.value)}
                      fullWidth
                    >
                      <MenuItem value={0}>$0</MenuItem>
                      <MenuItem value={10}>$10</MenuItem>
                      <MenuItem value={20}>$20</MenuItem>
                      <MenuItem value={30}>$30</MenuItem>
                    </Select>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Max</TableCell>
                  <TableCell>
                    <Select
                      value={priceMax}
                      onChange={(e) => setPriceMax(e.target.value)}
                      fullWidth
                    >
                      <MenuItem value={50}>$50</MenuItem>
                      <MenuItem value={100}>$100</MenuItem>
                      <MenuItem value={150}>$150</MenuItem>
                      <MenuItem value={200}>$200</MenuItem>
                    </Select>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <div style={{ marginBottom: '20px' }} />
          <Typography variant="subtitle1" gutterBottom>Brand</Typography>
          <Select
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            fullWidth
          >
            {mockBrands.map((brand, index) => (
              <MenuItem key={index} value={brand}>{brand}</MenuItem>
            ))}
          </Select>
          <div style={{ marginBottom: '20px' }} />
          <Typography variant="subtitle1" gutterBottom>Size</Typography>
          <Select
            value={size}
            onChange={(e) => setSize(e.target.value)}
            fullWidth
          >
            {mockSizes.map((size, index) => (
              <MenuItem key={index} value={size}>{size}</MenuItem>
            ))}
          </Select>
          <div style={{ marginBottom: '20px' }} />
          <Typography variant="subtitle1" gutterBottom>Rating Range</Typography>
          <TableContainer>
            <Table size="small">
              <TableBody>
                <TableRow>
                  <TableCell>Min</TableCell>
                  <TableCell>
                    <Select
                      value={ratingMin}
                      onChange={(e) => setRatingMin(e.target.value)}
                      fullWidth
                    >
                      {Array.from({ length: 6 }, (_, i) => (
                        <MenuItem key={i} value={i}>{i}</MenuItem>
                      ))}
                    </Select>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Max</TableCell>
                  <TableCell>
                    <Select
                      value={ratingMax}
                      onChange={(e) => setRatingMax(e.target.value)}
                      fullWidth
                    >
                      {Array.from({ length: 6 }, (_, i) => (
                        <MenuItem key={i} value={i}>{i}</MenuItem>
                      ))}
                    </Select>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Drawer>
    </div>
  );
};

export default FilterDrawer;
