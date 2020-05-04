import React, { useState } from 'react';
import { Grid, Box } from '@phobon/base';
import { Button } from '@phobon/grimoire';
import { AnimatePresence } from 'framer-motion';

import MotionContainer from './MotionContainer';

export default {
  component: MotionContainer,
  title: 'Components/MotionContainer',
};

export const withAppearDisappear = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Grid width={500} height={500} gridTemplateColumns="1fr" gridTemplateRows="1fr auto">
      <Box fullWidth fullHeight bg="blues.8">
        <AnimatePresence exitBeforeEnter>
          {visible && (
            <MotionContainer>
              <Box width={100} height={100} bg="greens.3" />
            </MotionContainer>
          )}
        </AnimatePresence>
      </Box>
      <Button onClick={() => setVisible(!visible)}>
        {visible ? 'Hide' : 'Show'}
      </Button>
    </Grid>
  );
};