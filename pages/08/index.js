import React from 'react';
import styled from 'styled-components';
import { Grid, Box, Image, Text, Link } from '@phobon/base';

import HotTub from 'rmdi/lib/HotTub';

const ContentBox = ({ header, description, link, ...props }) => (
  <Box p={6} fullWidth fullHeight bg="white" flexDirection="column" alignItems="flex-start" {...props}>
    <Text fontSize={5} lineHeight={1} mb={3} fontWeight="bold" color="grayscale.2">{header}</Text>
    <Text mb={3} color="grayscale.3">{description}</Text>
    <Link>{link}</Link>
  </Box>
);

const ImageBox = styled(Box)`
  background-image: url("https://source.unsplash.com/random/800x1000");
`;

const Eight = () => (
  <Grid
    fullWidth fullHeight
    gridTemplateColumns="1.3fr 1fr 1fr"
    gridTemplateRows="1fr 0.8fr 1fr">
    <Box p={6} fullWidth fullHeight gridArea="1 / 1 / span 3 / span 1" bg="grayscale.2" flexDirection="column" alignItems="flex-start" justifyContent="space-between">
      <Box as="nav" width={4 / 5} justifyContent="space-between">
        <Text textStyle="caps" color="white">Home</Text>
        <Text textStyle="caps" color="white" opacity={0.6}>Galleries</Text>
        <Text textStyle="caps" color="white" opacity={0.6}>Blog</Text>
        <Text textStyle="caps" color="white" opacity={0.6}>Profile</Text>
      </Box>

      <Box fullWidth flexDirection="column" alignItems="flex-start">
        <Text color="white" fontSize="125px" css={{ letterSpacing: 10 }}>Jakob</Text>
        <Text color="white" fontSize={2} opacity={0.6}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
      </Box>

      <Box opacity={0.6}>
        <HotTub color="white" mr={3} />
        <HotTub color="white" mr={3} />
        <HotTub color="white" />
      </Box>
    </Box>
    <ImageBox fullWidth fullHeight gridArea="1 / 2 / span 2 / span 1" />
    <ImageBox fullWidth fullHeight gridArea="2 / 3 / span 2 / span 1" />
    <Box fullWidth fullHeight gridArea="2 / 3 / span 2 / span 1" py={6} px={8} bg="hsla(0, 0%, 100%, 0.6)">
      <ImageBox fullWidth fullHeight />
    </Box>

    <ContentBox
      gridArea="3 / 2 / span 1 / span 1"
      header="About me"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      link="Read more" />
    <ContentBox
      gridArea="1 / 3 / span 1 / span 1"
      header="Beautiful places of the world"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      link="More photos" />
  </Grid>
);

export default Eight;