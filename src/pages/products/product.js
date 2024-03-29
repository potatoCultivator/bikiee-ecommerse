import React from 'react'
import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'

// Project Imports
import ProductCard from './productCard'
// import MainCard from 'components/MainCard';

// Frameset images
import dogmaPinarello from 'assets/product-samples/frameset/dogmaPinarello.jpg';
import sworks from 'assets/product-samples/frameset/sworks.jpg';
import cervelo from 'assets/product-samples/frameset/cervelo.jpg';

// Crankset images
import campagnoloCrankset from 'assets/product-samples/crankset/campagnoloCrankset.jpg';
import shimanoCrankset from 'assets/product-samples/crankset/shimanoultegraCrankset.jpg';
import viviCrankset from 'assets/product-samples/crankset/viviCrankset.jpg';

// Wheelset images
import cero from 'assets/product-samples/wheelset/cero.jpg';
import sram from 'assets/product-samples/wheelset/sram.jpg';
import zipp from 'assets/product-samples/wheelset/zipp.jpg';

// ==============================|| PRODUCT TABLE ||============================== //

const ProductTable = () => {
  const framsets = [dogmaPinarello, sworks, cervelo];
  const cranksets = [campagnoloCrankset, shimanoCrankset, viviCrankset];
  const wheelsets = [cero, sram, zipp];

  return (
    <Grid container rowSpacing={4.5} justifyContent="center">
      {/* row 1 */}
      <Grid item xs={12} sx={{ mb: -2.25 }}>
          <Typography variant="h5">Products</Typography>
      </Grid>

      {/* This is a spacer */}
      <Box height={80} />

      <Grid container columnSpacing={-30} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
            <ProductCard title="Frame Set" images={framsets}/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <ProductCard title="Crank Set" images={cranksets}/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <ProductCard title="Wheel Set" images={wheelsets}/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ProductCard title="Wheel Set" images={wheelsets}/>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ProductTable
