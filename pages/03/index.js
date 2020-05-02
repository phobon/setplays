import React from 'react';
import styled from 'styled-components';

import ChevronLeft from 'rmdi/lib/ChevronLeft';
import ChevronRight from 'rmdi/lib/ChevronRight';
import KeyboardBackspace from 'rmdi/lib/KeyboardBackspace';
import DragHandle from 'rmdi/lib/DragHandle';

import { Grid, Image, Box, Text } from '@phobon/base';

const RotatedText = styled(Text)`
  transform: rotate(90deg);
  transform-origin: 50% 50%;
`;

const Chevron = ({ children, ...props }) => (
  <Box round bg="grayscale.0" width={48} height={48} {...props}>
    {children}
  </Box>
);

const Three = () => (
  <Grid
    fullWidth fullHeight
    gridTemplateColumns="repeat(24, 1fr)"
    gridTemplateRows="repeat(7, 1fr)">

    <Image fullWidth fullHeight src="https://source.unsplash.com/random" fullWidth fullHeight gridArea="1 / 1 / 8 / 25" />

     <Box fullWidth fullHeight gridArea="1 / 2 / span 1 / span 2" justifyContent="flex-start">
      <Text color="white" fontWeight="bold">NEXT VISIT</Text>
    </Box>

    <Box fullWidth fullHeight gridArea="1 / 8 / span 1 / 18" justifyContent="space-around">
      <Text color="white" fontSize={0}>HOME</Text>
      <Text color="white" fontSize={0}>DESTINATIONS</Text>
      <Text color="white" fontSize={0}>GALLERIES</Text>
      <Text color="white" fontSize={0}>SUBMIT</Text>
    </Box>

    <Box fullWidth fullHeight gridArea="3 / 1 / span 2 / span 2" flexDirection="column">
      <Text color="white" mb={2} fontWeight="bold">01</Text>
      <Box flex={1} width={4} bg="white" borderRadius={4} mb={2} />
      <Text color="grayscale.5" mb={2}>02</Text>
      <Text color="grayscale.5" mb={2}>03</Text>
      <Text color="grayscale.5">04</Text>
    </Box>

    <Box fullWidth fullHeight gridArea="3 / 5 / span 3 / span 11" flexDirection="column" alignItems="flex-start" justifyContent="flex-start">
      <Text fontSize="96px" fontWeight="bold" color="white" lineHeight="96px">Pay a</Text>
      <Text fontSize="96px" fontWeight="bold" color="white" lineHeight="96px">visit to the</Text>
      <Text fontSize="96px" fontWeight="bold" color="white" lineHeight="96px">Faroe Islands</Text>
    </Box>

    <Box fullWidth fullHeight gridArea="3 / 17 / span 1 / span 4">
      <Chevron mr={3}>
        <ChevronLeft color="white" />
      </Chevron>
      <Chevron>
        <ChevronRight color="white" />
      </Chevron>
    </Box>

    <Box flexDirection="column" fullWidth fullHeight gridArea="7 / 5 / span 1 / span 4" alignItems="flex-start">
      <Text color="white" fontWeight="bold">18 different islands</Text>
      <Text color="grayscale.6">With splendid nature</Text>
    </Box>

    <Box flexDirection="column" fullWidth fullHeight gridArea="7 / 11 / span 1 / span 4" alignItems="flex-start">
      <Text color="white" fontWeight="bold">A lot of hidden gems</Text>
      <Text color="grayscale.6">And places less visited</Text>
    </Box>

    <Box fullWidth fullHeight gridArea="1 / 23 / span 1 / span 2">
      <DragHandle color="white" />
    </Box>

    <Box fullWidth fullHeight gridArea="4 / 23 / span 3 / span 2" bg="grayscale.6">
      <RotatedText>Explore</RotatedText>
    </Box>
    <Box gridArea="7 / 23 / span 1 / span 2" bg="grayscale.5" fullWidth fullHeight>
      <KeyboardBackspace style={{ transform: "rotate(-90deg)" }} />
    </Box>
  </Grid>
);

export default Three;
