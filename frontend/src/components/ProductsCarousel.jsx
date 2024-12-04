import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
// import { Scrollbars } from 'react-custom-scrollbars';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Button } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';

const ProductCard = ({ title } ) => {
  const products = [
    {
      name: 'Product 1',
      image: 'https://via.placeholder.com/400x250',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id convallis justo. Integer fermentum sapien non massa efficitur, et elementum ligula ullamcorper. Aliquam non sollicitudin urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.',
      rating: 3.5,
      price: 19.99,
    },
    {
      name: 'Product 2',
      image: 'https://via.placeholder.com/400x250',
      description: 'Description for Product 2',
      rating: 4.2,
      price: 29.99,
    },
    {
      name: 'Product 3',
      image: 'https://via.placeholder.com/400x250',
      description: 'Description for Product 3',
      rating: 4,
      price: 39.99,
    },
    {
      name: 'Product 4',
      image: 'https://via.placeholder.com/400x250',
      description: 'Description for Product 4',
      rating: 4.5,
      price: 49.99,
    },
    {
      name: 'Product 5',
      image: 'https://via.placeholder.com/400x250',
      description: 'Description for Product 5',
      rating: 3.8,
      price: 59.99,
    },
    {
      name: 'Product 6',
      image: 'https://via.placeholder.com/400x250',
      description: 'Description for Product 6',
      rating: 4.7,
      price: 69.99,
    },
    {
      name: 'Product 7',
      image: 'https://via.placeholder.com/400x250',
      description: 'Description for Product 7',
      rating: 3.9,
      price: 79.99,
    },
    {
      name: 'Product 8',
      image: 'https://via.placeholder.com/400x250',
      description: 'Description for Product 8',
      rating: 4.1,
      price: 89.99,
    },
    {
      name: 'Product 9',
      image: 'https://via.placeholder.com/400x250',
      description: 'Description for Product 9',
      rating: 4.3,
      price: 99.99,
    },
    {
      name: 'Product 10',
      image: 'https://via.placeholder.com/400x250',
      description: 'Description for Product 10',
      rating: 4.8,
      price: 109.99,
    },
  ];

 // Calculate the width of the container dynamically based on the number of products
 const containerWidth = products.length * 250;

 const wrapperStyle = {
   padding: '0 20px', // Add padding to create gap from screen edges
 };

   const sectionHeadingStyle = {
    color: '#0077b6', // Font color for section heading
    fontFamily: 'inherit', // Font family
    marginBottom: '10px', // Add margin
    padding: '10px',
    fontWeight: 'bold',
    borderBottom: '1px solid #0077b6', // Add border bottom
  };

  const handleFavoriteButtonClick = (event) => {
    // Prevent the click event from propagating to the card
    event.stopPropagation();
    // Add your logic for handling favorite button click here
  };

  const handleAddToCartButtonClick = (event) => {
    // Prevent the click event from propagating to the card
    event.stopPropagation();
    // Add your logic for handling add to cart button click here
  };

 return (
   <div style={wrapperStyle}>
     <div style={{ height: '100%', width: '100%', overflowX: 'auto', marginTop: '10px', overflowY: 'hidden' }}>
      <Typography variant="h6" gutterBottom style={sectionHeadingStyle}>
      { title }
      </Typography>
       {/* <Scrollbars autoHeight autoHeightMax={350} style={{ width: '100%' }}> */}
         <div style={{ display: 'flex', width: `${containerWidth}px`, paddingRight: '20px', paddingBottom: '10px' }}>
           {products.map((product, index) => (
             <Link to="/product" key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
               <Card sx={{ height: 300, width: 250, margin: '10px' }}>
                 <CardActionArea>
                   <CardMedia
                     component="img"
                     height="150"
                     image={product.image}
                     alt={product.name}
                   />
                  <CardContent>
                    <Tooltip
                      title={
                        <React.Fragment>
                          <Typography variant="body2" color="white" style={{ display: 'flex', alignItems: 'center' }}>
                            Rating:&nbsp;
                            <Rating value={product.rating} precision={0.1} size="small" readOnly />
                            &nbsp;{product.rating.toFixed(1)} {/* Display rating in text next to stars */}
                          </Typography>
                        </React.Fragment>
                      }
                      arrow
                    >
                      <Typography gutterBottom variant="body1" component="div" style={{ cursor: 'default' }}>
                        {product.name}
                      </Typography>
                    </Tooltip>
                    <Typography variant="body2" color="text.secondary">
                      Price: ${product.price}
                    </Typography>
                  </CardContent>
                 </CardActionArea>
                 <CardContent style={{ display: 'flex', justifyContent: 'space-between' }}>
                   <IconButton
                     aria-label="add to favorites"
                     size="small"
                     style={{ color: '#0077b6' }}
                     onMouseOver={(e) => e.target.style.color = '#0077b6'}
                     onMouseOut={(e) => e.target.style.color = ''}
                     onClick={handleFavoriteButtonClick} // Add onClick handler for favorite button
                   >
                     <FavoriteBorderIcon />
                   </IconButton>
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
                     onClick={handleAddToCartButtonClick} // Add onClick handler for add to cart button
                   >
                     Add to Cart
                   </Button>
                 </CardContent>
               </Card>
             </Link>
           ))}
         </div>
       {/* </Scrollbars> */}
     </div>
   </div>
 );
};

export default ProductCard;
