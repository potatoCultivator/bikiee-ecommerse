import React from 'react'
// import { CardMedia, CardContent, Typography, Divider } from '@material-ui/core';
import { CardMedia, CardContent, Typography } from '@mui/material';

const OrderTable = () => {
    const media = 'path-to-your-image'; // replace 'path-to-your-image' with the actual path or URL of your image
  
    return (
      <div>
          <CardMedia component="img" image={media} alt="green iguana" />
          <CardContent>
              <Typography variant="h5" color="textSecondary" gutterBottom>
              Card Subtitle
              </Typography>
              <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim, viverra augue eu.
              </Typography>
          </CardContent>
      </div>
    );
  }

export default OrderTable
