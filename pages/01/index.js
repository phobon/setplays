import React from 'react';
import { Grid, Box } from 'base';

const One = (props) => {
  return (
    <Grid
      gridTemplateColumns="repeat(10, 1fr)"
      gridTemplateRows="repeat(8, 1fr)"
      fullWidth
      fullHeight
      bg="grayscale.5">

      <Box fullWidth fullHeight gridArea="1 / 1 / span 1 / span 1" bg="white" />

      <Box fullWidth fullHeight gridArea="1 / 6 / span 8 / span 5" bg="grayscale.2" />
    </Grid>
  );
}

export default One;