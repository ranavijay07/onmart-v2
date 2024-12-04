import React, { useState } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Rating from '@mui/material/Rating';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const ProductDetailPage = ({product, cart, addToCart}) => {
  console.log(cart)
  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState('Pickup');

  const handleChangeQuantity = (event) => {
    setQuantity(event.target.value);
  };

  const handleChangeOption = (event) => {
    setSelectedOption(event.target.value);
  };

  // Function to handle adding to cart
  const handleAddToCart = (productId) => {
    console.log('Product ID added to cart:', productId);
    addToCart(productId);
  };
  

  const wrapperStyle = {
    padding: '0 20px', // Add padding to create gap from screen edges
  };

  const sectionHeadingStyle = {
    color: '#0077b6', // Font color for section heading
    fontFamily: 'inherit', // Font family
    fontWeight: 'bold'
  };

  return (
    <div style={wrapperStyle}>
      <br />
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href={`/`}>
          {product.department}
        </Link>
        <Typography color="textPrimary">{product.category}</Typography>
      </Breadcrumbs>

      <Divider />

      {/* Product details */}
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          {/* Product image */}
          <Paper style={{ width: '700px', height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={product.image} alt={product.name} style={{ maxWidth: '100%', maxHeight: '100%' }} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* Product information */}
          <Typography variant="h5" gutterBottom>{product.name}</Typography>
          <Typography variant="subtitle1" gutterBottom>${product.price}</Typography>
          <Typography variant="body1" gutterBottom>{product.description}</Typography>
          <Rating value={parseFloat(product.rating)} precision={0.1} size="small" readOnly />

          {/* Quantity selector */}
          <div style={{ marginTop: '20px' }}>
            <FormControl sx={{ mt: 2, minWidth: 120, marginRight: '20px' }}>
                <InputLabel id="quantity-label" sx={{ color: '#0077b6' }}>Quantity</InputLabel>
                <Select
                labelId="quantity-label"
                id="quantity"
                value={quantity}
                label="Quantity"
                onChange={handleChangeQuantity}
                sx={{ color: '#0077b6' }}
                >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    {/* Add more quantity options if needed */}
                    </Select>
                </FormControl>
                <FormControl sx={{ mt: 2, minWidth: 120 }}>
                    <InputLabel id="delivery-label" sx={{ color: '#0077b6' }}>Delivery Option</InputLabel>
                    <Select
                    labelId="delivery-label"
                    id="delivery"
                    value={selectedOption}
                    label="Delivery Option"
                    onChange={handleChangeOption}
                    sx={{ color: '#0077b6' }}
                    >
                    <MenuItem value="Pickup">Pickup</MenuItem>
                    <MenuItem value="Shipping">Shipping</MenuItem>
                    <MenuItem value="Delivery">Delivery</MenuItem>
                    </Select>
                </FormControl>
        </div>

          {/* Action buttons */}
          <div style={{ display: 'flex', marginTop: '20px', marginTop: '20px' }}>
            <Button
              aria-label="add to cart"
              size="small"
              style={{ backgroundColor: '#0077b6', color: 'white' }}
              variant="contained"
              onMouseOver={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.color = '#0077b6';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#0077b6';
                e.target.style.color = 'white';
              }}
              startIcon={<FavoriteBorderIcon />}
            >
              Add to Favourites
            </Button>
            <Button
              aria-label="add to cart"
              size="small"
              style={{ backgroundColor: '#0077b6', color: 'white',marginLeft: '20px'  }}
              variant="contained"
              onMouseOver={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.color = '#0077b6';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#0077b6';
                e.target.style.color = 'white';
              }}
              onClick={() => handleAddToCart(product._id)}
              startIcon={<ShoppingCartOutlinedIcon />}
            >
              Add to Cart
            </Button>
          </div>
        </Grid>
      </Grid>

      <Divider sx={{ mt: 2 }} />

      {/* Accordion for additional details */}
      <Accordion sx={{ mt: 2 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6" gutterBottom style={sectionHeadingStyle}>Product Specifications</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {product.specifications.map((spec, index) => (
              <div key={index}>
                <Typography variant="subtitle2">{spec.specificationId}</Typography>
                <Typography>{spec.specificationDescription}</Typography>
              </div>
            ))}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ mt: 2 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6" gutterBottom style={sectionHeadingStyle}>Shipping & Returns</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{product.shippingAndReturnDetails}</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ mt: 2 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6" gutterBottom style={sectionHeadingStyle}>Q&A</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {product.qa.map((qa, index) => (
              <div key={index}>
                <Typography variant="subtitle2">{qa.question}</Typography>
                <Typography>{qa.answer}</Typography>
              </div>
            ))}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ProductDetailPage;
