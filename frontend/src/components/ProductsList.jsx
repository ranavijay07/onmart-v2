import React, { useState } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Rating from '@mui/material/Rating';
import Pagination from '@mui/material/Pagination';
import { Link } from 'react-router-dom';
import FilterPanel from "../components/FilterPanel";


const ProductListingPage = ({ addToCart, items, title }) => {
  // Sample product data (replace with actual data)

  const [currentPage, setCurrentPage] = useState(1);

  const handleChangePage = (event, value) => {
    setCurrentPage(value);
  };

  // Function to handle adding to cart
  const handleAddToCart = (productId) => {
    console.log('Product ID added to cart:', productId);
    addToCart(productId);
  };

  const sectionHeadingStyle = {
    color: '#0077b6', // Font color for section heading
    fontFamily: 'inherit', // Font family
    marginBottom: '20px', // Add margin
    padding: '10px',
    fontWeight: 'bold',
    borderBottom: '1px solid #0077b6', // Add border bottom
    };

  return (
    <div style={{ padding: '20px' }}>
      {/* <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" to='/'>
          Department
        </Link>
        <Typography color="textPrimary">Category</Typography>
      </Breadcrumbs> */}

      {/* <Divider /> */}
      <Typography variant="h6" gutterBottom style={sectionHeadingStyle}>
      {title}
      </Typography>

      <FilterPanel />
    
      <Grid container spacing={3}>
        {items.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product._id}>
            <Link to={`/product/${product._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Paper
                style={{
                  padding: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  height: '200px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    cursor: 'pointer',
                  },
                }}
              >
                <img src={product.image} alt={product.name} style={{ marginRight: '20px', maxWidth: '150px' }} />
                <div style={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom>{product.name}</Typography>
                  <Typography variant="subtitle1" gutterBottom>${product.price}</Typography>
                  <Typography variant="body2" color="#0077b6" style={{ display: 'flex', alignItems: 'center' }}>
                          Rating:&nbsp;
                          <Rating value={product.rating} precision={0.1} size="small" readOnly />
                          &nbsp;{product.rating.toFixed(1)} {/* Display rating in text next to stars */}
                        </Typography>
                  <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                  <Link
                    to="/"
                    style={{
                      marginRight: '10px',
                      fontSize: '0.8rem',
                      color: '#0077b6',
                      textDecoration: 'none',
                      padding: '5px 10px',
                      border: '1px solid #0077b6',
                      borderRadius: '4px',
                    }}
                  >
                    Add to Favorites
                  </Link>
                  <Link
                    onClick={() => handleAddToCart(product._id)} 
                    to="#"
                    style={{
                      fontSize: '0.8rem',
                      color: '#0077b6',
                      textDecoration: 'none',
                      padding: '5px 10px',
                      backgroundColor: '#0077b6',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                    }}
                  >
                    Add to Cart
                  </Link>
                  </div>
                </div>
              </Paper>
            </Link>
          </Grid>
        ))}
      </Grid>

      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
        <Pagination count={10} page={currentPage} onChange={handleChangePage} />
      </div>
    </div>
  );
};

export default ProductListingPage;