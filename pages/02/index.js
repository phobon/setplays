import React from 'react';
import styled from 'styled-components';

import { Grid, Box, Card, Text, Image } from 'base';

import Share from 'rmdi/lib/Share';
import ChevronLeft from 'rmdi/lib/ChevronLeft';
import ChevronRight from 'rmdi/lib/ChevronRight';
import ShoppingBasket from 'rmdi/lib/ShoppingBasket';
import Add from 'rmdi/lib/Add';

const RotateBox = styled(Box)`
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
`;

const Two = () => {
  return (
    <Grid
      gridTemplateColumns="repeat(20, 1fr)"
      gridTemplateRows="repeat(16, 1fr)"
      cover>

      <Image cover src="https://source.unsplash.com/random" gridArea="1 / 1 / 17 / span 14" />

      <Box gridArea="1 / 1 / 17 / 4" bg="grayscale.6" cover>
        <Text>PYRAMID</Text>
      </Box>

      <Box gridArea="1 / 18 / 3 / 21" bg="grayscale.6" cover>
        <ShoppingBasket />
      </Box>

      <Box gridArea="1 / 13 / 3 / 15" justifyContent="flex-start" px={2}>
        <ChevronLeft color="white" />
        <ChevronRight color="white" ml={3} />
      </Box>
      <Card gridArea="3 / 13 / 15 / 17" cover borderRadius={0}>
        02
      </Card>

    </Grid>
  )
};

export default Two;