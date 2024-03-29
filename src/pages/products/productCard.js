import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import ButtonBase from '@mui/material/ButtonBase';

// Project Imports
// import MainCard from 'components/MainCard';




// ==============================|| PRODUCT CARD ||============================== //

export default function ProductCard({title, images, intervalTime}) {
  // const images = [dogmaPinarello, sworks, cervelo];
  const [currentImage, setCurrentImage] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    },intervalTime == null ? 10000 : intervalTime);
    return () => clearInterval(interval);
  }, [images.length, intervalTime]);

  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        alt="product title"
        height="300"
        image={images[currentImage]}
      />
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          {title}
        </Typography>
        <Typography 
        variant="h3" 
        color="text.secondary"
        sx={{ mt: -2}}>
          100
        </Typography>
      </CardContent>
      <CardActions sx={{ mt: -3 }}>
        <Button size="small"> 
          <Typography variant="h3">view</Typography>
        </Button>
      </CardActions>
    </Card>
  );
}
