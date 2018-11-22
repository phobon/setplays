import React from 'react';
import styled from 'styled-components';

import { Grid, Box, theme } from 'base';

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

const overflowStyles = { overflow: 'hidden', position: 'relative' };

const Four = () => (
  <Grid cover gridTemplateRows="repeat(auto-fill, 100px)" gridTemplateColumns="repeat(auto-fill, 100px)">
    <SplitGradientBox cover gridArea="1 / 2 / span 6 / span 6" left="-50%" transform="rotate(90deg)" colour1="rgba(234, 176, 162)" colour2="rgba(44, 65, 84)" />
    
    <RadialBox cover gridArea="1 / 1 / span 4 / span 4" colour1="rgba(226, 226, 226)" colour2="rgba(199, 225, 212)"/>

    <Box round cover gridArea="5 / 1 / span 4 / span 4" bg="rgba(207, 208, 177)" />

    <Box cover gridArea="4 / 5 / span 6 / span 6" style={overflowStyles}>
      <PositionBox round cover position="absolute" left="-50%" bg="rgba(234, 176, 162)" />
    </Box>
    <SplitGradientBox cover gridArea="5 / 5 / span 4 / span 4" left="-50%" colour1="rgba(234, 176, 162)" colour2="rgba(44, 65, 84)" />
    
    <Box cover gridArea="4 / 5 / span 6 / span 6" style={overflowStyles}>
      <PositionBox round cover position="absolute" left="50%" bg="rgba(44, 65, 84)" />
    </Box>
    <SplitGradientBox cover gridArea="5 / 7 / span 4 / span 4" left="50%" colour1="rgba(234, 176, 162)" colour2="rgba(199, 225, 212)" />

    <RadialBox cover gridArea="3 / 5 / span 4 / span 4" transform="rotate(180deg)" colour1="rgba(207, 208, 177)" colour2="rgba(151, 196, 173)" />

    <RadialBox cover gridArea="7 / 7 / span 4 / span 4" colour1="rgba(151, 196, 173)" colour2="rgba(199, 225, 212)" />
  </Grid>
);

export default Four;