import React from 'react';
import styled from 'styled-components';

import { Grid, Box, Card, Text, Image, Link } from '@phobon/base';

import Share from 'rmdi/lib/Share';
import ChevronLeft from 'rmdi/lib/ChevronLeft';
import ChevronRight from 'rmdi/lib/ChevronRight';
import ShoppingBasket from 'rmdi/lib/ShoppingBasket';
import Add from 'rmdi/lib/Add';

const CustomLink = styled(Link)`
  position: relative;
  color: ${props => props.theme.colors.grayscale[2]};
  font-weight: 700;
  text-decoration: none;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
`;

const RotatedBox = styled(Box)`
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
`;
const RotatedText = styled(Text)`
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
`;

const Bar = styled(Box)`
  background-color: ${props => props.theme.colors.grayscale[2]};
  width: ${props => props.theme.space[1]}px;
  position: relative;
  align-items: flex-end;
  border-radius: ${props => props.theme.radii[3]}px;

  &::after {
    content: '';
    width: 100%;
    height: 80%;
    border-radius: ${props => props.theme.radii[3]}px;
    background-color: ${props => props.theme.colors.reds[2]};
  }
`;

const socialItems = [
  'Fb', 'Tw', 'In'
];

const Two = () => {
  const social = socialItems.map(s => (
    <CustomLink key={s}>
      {s}
    </CustomLink>
  ));

  return (
    <Grid
      gridTemplateColumns="repeat(20, 1fr)"
      gridTemplateRows="repeat(16, 1fr)"
      fullWidth fullHeight>

      <Image fullWidth fullHeight src="https://source.unsplash.com/random" gridArea="1 / 1 / 17 / span 14" />

      <RotatedBox gridArea="1 / 1 / span 3 / span 3" fullWidth fullHeight>
        <Text fontWeight="bold" color="white" fontSize={4}>PYRAMID</Text>
      </RotatedBox>

      <Box gridArea="7 / 1 / 11 / span 3" fullWidth fullHeight flexDirection="column">
        <RotatedText color="white">03</RotatedText>
        <Bar flex={1} my={3} />
        <RotatedText color="white">02</RotatedText>
      </Box>

      <Box gridArea="15 / 1 / span 3 / span 3" fullWidth fullHeight>
        <Box round bg="reds.3" width={64} height={64}>
          <Add color="white" />
        </Box>
      </Box>

      <Box gridArea="1 / 18 / 3 / 21" fullWidth fullHeight>
        <ShoppingBasket />
      </Box>
      <Box fullWidth fullHeight gridArea="7 / 18 / 11 / 21" justifyContent="space-between" flexDirection="column">
        {social}
      </Box>
      <Box gridArea="15 / 18 / 17 / 21" fullWidth fullHeight>
        <Share />
      </Box>

      <Box gridArea="1 / 13 / 3 / 15" justifyContent="flex-start" px={2}>
        <ChevronLeft color="white" />
        <ChevronRight color="white" ml={3} />
      </Box>
      <Card gridArea="3 / 13 / 15 / 17" fullWidth fullHeight borderRadius={0} flexDirection="column" alignItems="flex-start" p={4}>
        <Text fontWeight="bold" fontSize={5} mb={3}>02</Text>

        <Box flex={1} alignItems="flex-start" fullWidth>
          <Text fontWeight="bold" fontSize="42px">Ginger Weiss & Lime</Text>
        </Box>
        
        <Text fontWeight="bold" fontSize={2}>Details</Text>
      </Card>

    </Grid>
  )
};

export default Two;