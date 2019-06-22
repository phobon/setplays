import React from 'react';
import { Box, Card, Grid, Text } from '@phobon/base';
import { Spacer } from '@phobon/grimoire';

const dates = [
  {
    label: 'M',
    day: 3,
    active: true,
  },
  {
    label: 'T',
    day: 4,
  },
  {
    label: 'W',
    day: 5,
    pips: [
      'purples',
      'oranges',
    ]
  },
  {
    label: 'T',
    day: 6,
  },
  {
    label: 'F',
    day: 7,
    pips: [
      'greens',
      'purples',
    ]
  },
  {
    label: 'S',
    day: 8,
    pips: [
      'oranges',
    ]
  },
  {
    label: 'S',
    day: 9,
  },
];

const calendar = [
  {
    id: 1,
    title: 'Coffee with Gussie Banks at Manor Circle',
    timespan: '9:00 - 9:30',
    colour: 'greens',
  },
  {
    id: 2,
    title: 'Morning Sales Team Meeting',
    timespan: '9:30 - 10:00',
    colour: 'greens',
  },
  {
    id: 3,
    indicator: true,
  },
  {
    id: 4,
    title: 'Call with Mark',
    timespan: '10:00 - 10:30',
    showGlyph: true,
    colour: 'oranges',
  },
  {
    id: 5,
    title: 'Pickup Lunch',
    timespan: '10:30 - 10:050',
    colour: 'purples',
  },
];

const Day = ({ label, day, pips, active, ...props }) => (
  <Box flexDirection="column" {...props}>
    <Text fontSize={0} color="grayscale.5">{label}</Text>
    <Box width={32} height={32} round bg={active ? 'greens.9' : 'transparent'}>
      <Text fontSize={0}>{day}</Text>
    </Box>
    <Box height={3} css={`> * + * { margin-left: 4px; }`}>
      {pips && pips.map(p => (
        <Box key={`${label}__${p}`} width={3} height={3} bg={`${p}.8`} />
      ))}
    </Box>
  </Box>
);

const Indicator = props => (
  <Box fullWidth {...props}>
    <Box round width={8} height={8} bg="blues.5" />
    <Spacer direction="horizontal" length="100%" bg="blues.5" />
  </Box>
);

const CalendarEntry = ({ title, timespan, colour, showGlyph, ...props }) => (
  <Box
    fullWidth
    fullHeight
    pr={3}
    {...props}>
    <Box
      borderRadius="16px 16px 16px 0"
      bg={`${colour}.9`}
      fullWidth
      fullHeight
      p={3}
      flexDirection="column"
      justifyContent="space-between"
      alignItems="flex-start">
      <Text fontSize={2} fontWeight="bold" mb={3}>{title}</Text>

      {showGlyph ? (
        <Box fullWidth justifyContent="space-between">
          <Text fontSize={0}>{timespan}</Text>
          <Box round width={24} height={24} bg={`${colour}.3`} />
        </Box>
      ) : <Text fontSize={0}>{timespan}</Text>}
    </Box>
  </Box>
);

const Five = () => (
  <Box fullWidth fullHeight>
    <Card flexDirection="column" width={375} height={812} justifyContent="flex-start" borderRadius={5} pt={6} pb={3} bg="background">
      <Box justifyContent="space-between" fullWidth mb={3} px={3}>
        <Text fontSize={4} fontWeight="bold">October</Text>
        <Box round width={32} height={32} bg="grayscale.7" />
      </Box>

      <Grid
        gridTemplateColumns="repeat(7, 1fr)"
        fullWidth
        px={2}
        mb={2}>
        {dates.map((d, i) => <Day key={`day__${i}`} {...d} />)}
      </Grid>
      <Spacer length="100%" direction="horizontal" mb={5} />
      
      <Grid
        flex={1}
        gridTemplateColumns="auto auto 1fr"
        gridTemplateRows="1fr 1fr auto 1fr auto"
        pl={3}
        gridGap={2}>
        <Text gridArea="1 / 1 / span 1 / span 1" fontSize={0} css={{ alignSelf: 'flex-start' }}>09:00</Text>
        <Text gridArea="4 / 1 / span 1 / span 1" fontSize={0} css={{ alignSelf: 'flex-start' }}>10:00</Text>
        <Indicator gridArea="3 / 2 / span 1 / span 2" />
        {calendar.map(({ id, indicator, ...c }, i) => !indicator && (
          <CalendarEntry
            key={`calendar__${id}`}
            gridArea={`${i + 1} / 3 / span 1 / span 1`}
            {...c} />
        ))}
      </Grid>

      <Box fullWidth px={3} mt={3}>
        <Box justifyContent="space-around" p={3} fullWidth bg="grayscale.8" borderRadius={4}>
          {Array(5).join().split(',').map((a, i) => (
            <Box key={`item__${i}`}round width={32} height={32} bg="grayscale.7" />
          ))}
        </Box>
      </Box>
    </Card>
  </Box>
);

export default Five;