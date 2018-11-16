import React from 'react';
import styled from 'styled-components';
import { Grid, Box, Image } from 'base';

const Layout = styled(Grid)`
  background-image: ${props => `linear-gradient(to right, ${props.theme.colors.grayscale[5]}, ${props.theme.colors.grayscale[5]} 50%, ${props.theme.colors.grayscale[2]} 50%)`};
`;
const CoverImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const One = (props) => {
  return (
    <Layout
      gridTemplateColumns="repeat(10, 1fr)"
      gridTemplateRows="repeat(8, 1fr)"
      fullWidth
      fullHeight>
      <CoverImage src="https://source.unsplash.com/random" gridArea="1 / 6 / span 8 / span 5" />

      <Box fullWidth fullHeight gridArea="1 / 1 / span 1 / span 1" bg="white" />

      <Box fullWidth fullHeight gridArea="8 / 1 / span 1 / span 1">
        <Box round bg="reds.2" width={64} height={64} />
      </Box>

      <Box fullWidth fullHeight gridArea="2 / 2 / span 6 / span 5" bg="grayscale.5" />
    
    </Layout>
  );
}

export default One;