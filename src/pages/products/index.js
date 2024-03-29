import React from 'react'
import { Grid, Typography } from '@mui/material'

// Project Imports
import ProductCard from './productCard'
// import MainCard from 'components/MainCard';

// Frameset images
import dogmaPinarello from 'assets/product-samples/frameset/dogmaPinarello.jpg';
import sworks from 'assets/product-samples/frameset/sworks.jpg';
import cervelo from 'assets/product-samples/frameset/cervelo.jpg';

// Groupset images
import brakeleverRB from 'assets/product-samples/groupset/brakeleverRB.jpg';
import chains from 'assets/product-samples/groupset/chains.jpg';
import fd from 'assets/product-samples/groupset/fd.jpg';
import rd from 'assets/product-samples/groupset/rd.jpg';


// Crankset images
import campagnoloCrankset from 'assets/product-samples/crankset/campagnoloCrankset.jpg';
// import shimanoCrankset from 'assets/product-samples/crankset/shimanoultegraCrankset.jpg';
// import viviCrankset from 'assets/product-samples/crankset/viviCrankset.jpg';

// Wheelset images
import cero from 'assets/product-samples/wheelset/cero.jpg';
import sram from 'assets/product-samples/wheelset/sram.jpg';
import zipp from 'assets/product-samples/wheelset/zipp.jpg';

// ==============================|| PRODUCT TABLE ||============================== //

const ProductTable = () => {
  const framsets = [dogmaPinarello, sworks, cervelo];
  const groupsets = [campagnoloCrankset, brakeleverRB, chains, fd, rd];
  // const cranksets = [campagnoloCrankset, shimanoCrankset, viviCrankset];
  const wheelsets = [cero, sram, zipp];

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">Products</Typography>
      </Grid>

      <Grid item xs={12} md={6} lg={3}>
        <ProductCard title="Frameset" images={framsets} intervalTime={10000}/>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <ProductCard title="Grouptset" images={groupsets} intervalTime={15000}/>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <ProductCard title="Wheelset" images={wheelsets} intervalTime={7000}/>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <ProductCard title="Other Components" images={groupsets} intervalTime={4000}/>
      </Grid>
    </Grid>
  )
}

export default ProductTable
