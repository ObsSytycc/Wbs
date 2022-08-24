import React from 'react'
import { Grid } from '@mui/material';
import Blogcard from '../Blogcard';
export default function All() {
  return (
<Grid container spacing={2}>
    <Grid item lg={4} md={4} sm={6} xs={12}>
   <Blogcard/>
    </Grid>
    <Grid item lg={4} md={4} sm={6} xs={12}>
   <Blogcard/>
    </Grid>
    <Grid item lg={4} md={4} sm={6} xs={12}>
   <Blogcard/>
    </Grid>
</Grid>
  )
}
