import React from 'react';
import styled from 'styled-components';
import { Box, Card, Grid, Text, Image, Vector } from '@phobon/base';
import { Spacer, Tag } from '@phobon/grimoire';

import Add from 'rmdi/lib/Add';

const FilterBox = styled(Box)`
  position: relative;

  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    box-shadow: 0 15px 25px hsla(33, 76%, 84%, 1), 0 5px 10px hsla(33, 76%, 84%, 1);
    pointer-events: none;
    border-radius: inherit;
    opacity: ${props => props.active ? 0.5 : 0};
    left: 0;
    top: 0;
  }
`;

const Filter = ({ active, count, label, children, ...props }) => (
  <FilterBox
    flexDirection="column"
    alignItems="flex-start"
    width={96}
    height={96}
    borderRadius={5}
    p={3}
    active={active}
    {...props}>
    <Text color="inherit" fontWeight="bold" fontSize={5} mb={1}>{count}</Text>
    <Text color={active ? 'white' : 'foreground'}>{label}</Text>
    {children}
  </FilterBox>
);

Filter.defaultProps = {
  bg: 'grayscale.8',
};

const Six = () => (
  <Box fullWidth fullHeight>
    <Card flexDirection="column" width={375} height={812} justifyContent="flex-start" borderRadius="30px" pt={7} pb={3} bg="background" alignItems="flex-start">
      <Box fullWidth justifyContent="space-between" px={5} mb={6}>
      <Vector width="16" height="10" viewBox="0 0 16 10">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M16 10L16 7L-3.0598e-07 7L-4.37114e-07 10L16 10ZM8 3L8 -3.49691e-07L0 -6.99382e-07L-1.31134e-07 3L8 3Z" fill="hsl(216, 6%, 49%)" />
      </Vector>

        <Image width={32} height={32} borderRadius={4} src="https://source.unsplash.com/random/32x32" />
      </Box>

      <Text ml={5} fontWeight="bold" fontSize={5} color="purples.1">Feed</Text>
      <Text ml={5} color="grayscale.5" mb={6}>Set ut amnet dolor</Text>

      <Grid fullWidth gridTemplateColumns="repeat(3, 1fr)" gridGap={2} px={5} mb={6}>
        <Filter bg="oranges.7" color="white" count={24} label="photos" active />
        <Filter color="reds.7" count={48} label="articles" />
        <Filter color="purples.7" count="22k" label="followers" />
      </Grid>

      <Box fullWidth css={{ overflow: 'hidden', position: "relative" }} height={26} mb={5}>
        <Box width="104%" css={{ position: 'absolute', left: 32 }} justifyContent="space-between">
          <Box px={2} py={1} bg="oranges.9" color="oranges.2" borderRadius={4}>
            <Text color="inherit" fontSize={0} textStyle="caps" mx={1}>chat</Text>
          </Box>
          <Box px={2} py={1}>
            <Text color="grayscale.5" fontSize={0} textStyle="caps">featured</Text>
          </Box>
          <Box px={2} py={1}>
            <Text color="grayscale.5" fontSize={0} textStyle="caps">popular</Text>
          </Box>
          <Box px={2} py={1}>
            <Text color="grayscale.5" fontSize={0} textStyle="caps">followers</Text>
          </Box>
        </Box>
      </Box>

      <Text ml={5} fontWeight="bold" fontSize={2} mb={2} color="purples.1">My photos</Text>
      <Box fullWidth css={{ overflow: 'hidden', position: "relative" }} height={140} alignItems="flex-start">
        <Box css={{ position: 'absolute', left: 32 }}>
          <Box bg="grayscale.8" borderRadius={5} height={96} width={96} mr={2}>
            <Add color="grayscale.7" size={40} />
          </Box>
          <Card mr={2} borderRadius={5} height={96} width={96} boxShadowSize="l">
            <Image cover borderRadius={5} src="https://source.unsplash.com/random/96x96" />
          </Card>
          <Card mr={2} borderRadius={5} height={96} width={96} boxShadowSize="l">
            <Image cover borderRadius={5} src="https://source.unsplash.com/random/96x96" />
          </Card>
          <Card borderRadius={5} height={96} width={96} boxShadowSize="l">
            <Image cover borderRadius={5} src="https://source.unsplash.com/random/96x96" />
          </Card>
        </Box>
      </Box>

      <Text ml={5} fontWeight="bold" fontSize={2} mb={2} color="purples.1">My videos</Text>
      <Box fullWidth css={{ overflow: 'hidden', position: "relative" }} height={112} mb={5}>
        <Box css={{ position: 'absolute', left: 32 }}>
          <Image borderRadius={5} height={112} width={192} mr={2} src="https://source.unsplash.com/random/192x112" />
          <Image borderRadius={5} height={112} width={192} src="https://source.unsplash.com/random/192x112" />
        </Box>
      </Box>
    </Card>
  </Box>
);

export default Six;