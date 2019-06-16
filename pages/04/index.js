import React from 'react';
import styled from 'styled-components';

import { Grid, Box, theme, Text } from '@phobon/base';

const PositionBox = styled(Box)`
  position: ${props => props.position};
  left: ${props => props.left};
  top: ${props => props.top};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
`;

const SplitGradientBox = styled(Box)`
  overflow: hidden;
  position: relative;
  transform: ${props => props.transform};

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: ${props => props.top};
    left: ${props => props.left};
    background: ${props => `linear-gradient(
      to bottom,
      ${props.colour1} 0, ${props.colour1} 50%, 
      ${props.colour2} 50%, ${props.colour2} 100%
    )`};
    border-radius: 100%;
  }
`;
SplitGradientBox.defaultProps = {
  colour1: theme.colors.purples[5],
  colour2: theme.colors.blues[5],
  top: 0,
  left: 0,
};

const RadialBox = styled(Box)`
  position: relative;
  overflow: hidden;
  transform: ${props => props.transform};
  
  &::before {
    content: '';
    position: absolute;
  }

  &::before {
    left: 0;
    bottom: 0;
    width: 200%;
    height: 200%;
    background: ${props => `radial-gradient(
      circle farthest-side at center,
      transparent 0, transparent 50%,
      ${props.colour1} 50%, ${props.colour1} 75%,
      ${props.colour2} 75%, ${props.colour2} 100%
    )`};
    border-radius: 100%;
  }
`;
RadialBox.defaultProps = {
  colour1: theme.colors.reds[5],
  colour2: theme.colors.oranges[5],
};

const menuItems = ['Fashion', 'Jewellery', 'Watches', 'Fragrance'];

const overflowStyles = { overflow: 'hidden', position: 'relative' };

const Four = () => {
  const menu = menuItems.map(m => (
    <Text key={m} color="grayscale.4">{m}</Text>
  ));

  return (
    <Grid fullWidth fullHeight gridTemplateRows="repeat(10, 1fr)" gridTemplateColumns="repeat(auto-fill, calc(100vh / 10))">
      <SplitGradientBox fullWidth fullHeight gridArea="1 / 5 / span 6 / span 6" left="-50%" transform="rotate(90deg)" colour1="rgba(234, 176, 162)" colour2="rgba(44, 65, 84)" />
      
      <RadialBox fullWidth fullHeight gridArea="1 / 1 / span 4 / span 4" colour1="rgba(226, 226, 226)" colour2="rgba(199, 225, 212)"/>
  
      <Box round fullWidth fullHeight gridArea="5 / 1 / span 4 / span 4" bg="rgba(207, 208, 177)" />
  
      <Box fullWidth fullHeight gridArea="4 / 5 / span 6 / span 6" style={overflowStyles}>
        <PositionBox round fullWidth fullHeight position="absolute" left="-50%" bg="rgba(234, 176, 162)" />
      </Box>
      <SplitGradientBox fullWidth fullHeight gridArea="5 / 7 / span 4 / span 4" left="-50%" colour1="rgba(234, 176, 162)" colour2="rgba(44, 65, 84)" />
      
      <Box fullWidth fullHeight gridArea="4 / 5 / span 6 / span 6" style={overflowStyles}>
        <PositionBox round fullWidth fullHeight position="absolute" left="50%" bg="rgba(44, 65, 84)" />
      </Box>
      <SplitGradientBox fullWidth fullHeight gridArea="5 / 5 / span 4 / span 4" left="50%" colour1="rgba(234, 176, 162)" colour2="rgba(199, 225, 212)" />
  
      <RadialBox fullWidth fullHeight gridArea="3 / 5 / span 4 / span 4" transform="rotate(180deg)" colour1="rgba(207, 208, 177)" colour2="rgba(151, 196, 173)" />
  
      <RadialBox fullWidth fullHeight gridArea="7 / 7 / span 4 / span 4" colour1="rgba(151, 196, 173)" colour2="rgba(199, 225, 212)" />
  
      <Box as="nav" gridArea="1 / 12 / span 2 / span 5" justifyContent="space-between">
        {menu}
      </Box>
  
      <Text gridArea="6 / 12 / span 5 / span 6" fontSize="42px">
        To be the Ultimate House of Luxury, defining style and creating desire, now and forever.
      </Text>
    </Grid>
  );
}



export default Four;