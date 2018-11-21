import React from 'react';
import styled from 'styled-components';
import { Grid, Box, Image, Text, Link } from 'base';

import Apps from 'rmdi/lib/Apps';
import KeyboardBackspace from 'rmdi/lib/KeyboardBackspace';
import Search from 'rmdi/lib/Search';

const menuItems = [
  'Lookbook', 'Men', 'Women'
];
const socialItems = [
  'Fb', 'Tw', 'In'
];

const CustomLink = styled(Link)`
  position: relative;
  color: ${props => props.theme.colors.grayscale[2]};
  font-weight: 700;
  text-decoration: none;

  &::after {
    content: '';
    width: ${props => props.theme.space[2]}px;
    height: ${props => props.theme.space[2]}px;
    background-color: white;
    position: absolute;
    opacity: ${props => props.current ? 1 : 0};
    border-radius: 50%;
    top: ${props => props.theme.space[5]}px;
    left: ${props => `calc(50% - ${props.theme.space[1]}px)`};
  }
`;

const Dxpe = styled(Text)`
  font-size: 128px;
  font-weight: bold;
  position: relative;

  &::after {
    content: 'DxpeChef';
    position: absolute;
    color: white;
    font-size: inherit;
    font-weight: normal;
    left: 20%;
    top: 30%;
  }
`;

const RotatedBox = styled(Box)`
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
`;

const One = () => {
  const menu = menuItems.map((m, i) => (
    <CustomLink key={m} current={i === 0}>
      {m}
    </CustomLink>
  ));

  const social = socialItems.map(s => (
    <CustomLink key={s}>
      {s}
    </CustomLink>
  ));

  return (
    <Grid
      gridTemplateColumns="repeat(20, 1fr)"
      gridTemplateRows="repeat(16, 1fr)"
      cover
      bg="grayscale.6">
      {/* Hero image */}
      <Image cover src="https://source.unsplash.com/random" gridArea="1 / 11 / span 16 / span 11" />

      {/* Hamburder-style menu */}
      <Box cover gridArea="1 / 1 / span 2 / span 2" bg="white">
        <Apps />
      </Box>

      {/* Main menu */}
      <Box as="nav" gridArea="1 / 4 / span 2 / span 4" justifyContent="space-between">
        {menu}
      </Box>

      <Box cover gridArea="1 / 11 / span 2 / span 2" justifyContent="flex-end">
        <Box alignItems="baseline">
          <Text fontSize={2} color="white" fontWeight="bold">01</Text>
          <Text fontSize={0} color="grayscale.6">/03</Text>
        </Box>
      </Box>

      <Box cover gridArea="1 / 19 / span 2 / span 2">
        <Search color="white" />
      </Box>

      {/* Social */}
      <RotatedBox cover gridArea="8 / 1 / 10 / span 2" justifyContent="space-between">
        {social}
      </RotatedBox>

      {/* Red bubble */}
      <Box cover gridArea="15 / 1 / span 2 / span 2">
        <Box round bg="reds.2" width={64} height={64} />
      </Box>

      {/* Button */}
      <Box cover gridArea="15 / 4 / span 2 / span 3">
        <Box fullWidth bg="white" height={48} borderRadius={6} fontSize={0}>SHOW MORE</Box>
      </Box>

      <Box cover gridArea="15 / 9 / span 2 / span 2">
        <KeyboardBackspace />
      </Box>
      <Box cover gridArea="15 / 11 / span 2 / span 2">
        <KeyboardBackspace color="white" style={{ transform: 'rotate(180deg)' }}/>
      </Box>

      <Box cover gridArea="3 / 4 / span 12 / span 9" bg="grayscale.6" flexDirection="column" alignItems="flex-start">
        <Dxpe>Dxpe</Dxpe>
        <Text mt={10} width={3 / 5} lineHeight="28px" color="grayscale.2">Dxpe Chef (Dope Chef) Was Established in 2008, specialising in contemporary casual street wear. A culture brand based on tours around the world, hence the sir name D.TOUR symbolised by the D.Globe logo</Text>
      </Box>
    
    </Grid>
  );
};

export default One;