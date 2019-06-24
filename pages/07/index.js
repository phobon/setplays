import React from 'react';
import styled from 'styled-components';
import { Box, Card, BoxList, BoxListItem, Text } from '@phobon/base';
import { Spacer } from '@phobon/grimoire';

import Add from 'rmdi/lib/Add';
import ChevronLeft from 'rmdi/lib/ChevronLeft';
import ChevronRight from 'rmdi/lib/ChevronRight';

const calendar = [
  {
    id: 1,
    date: 17,
    day: 'Mon',
    pips: [
      'reds', 'oranges', 'greens',
    ],
    selected: true,
  },
  {
    id: 2,
    date: 18,
    day: 'Tue',
    pips: [
      'greens',
    ],
  },
  {
    id: 3,
    date: 19,
    day: 'Wed',
    pips: [
      'grayscale', 'greens',
    ],
  },
  {
    id: 4,
    date: 20,
    day: 'Thu',
    pips: [
      'grayscale', 'oranges', 'reds',
    ],
  },
  {
    id: 5,
    date: 21,
    day: 'Fri',
    pips: [],
  },
];

const schedule = [
  {
    id: 1,
    heading: 'First meeting about app',
    colour: 'blues',
    time: '10:30 am - 11:30 am',
    selected: true,
  },
  {
    id: 2,
    heading: 'Send documents to an accountant',
    colour: 'greens',
    time: '5:00 pm - send report',
  },
  {
    id: 3,
    heading: 'Meeting with investor',
    colour: 'oranges',
    time: '5:30 pm - 7:30 pm',
  },
  {
    id: 4,
    heading: 'Meeting with someone else',
    colour: 'reds',
    time: '7:30 pm - 8:30 pm',
  }
];

const tags = [
  { label: 'ECO', colour: 'greens.5' },
  { label: 'GNSi', colour: 'pink' },
  { label: 'Fintech' },
  { label: 'Booking' },
  { label: 'Other Tag' },
];

const Tag = ({ label, colour, ...props }) => (
  <Box bg={colour ? colour : 'grayscale.8'} color={colour ? 'white' : 'foreground'} px={3} py={1} borderRadius={5} {...props}>
    <Text color="inherit" fontSize={0}>{label}</Text>
  </Box>
);

const ScheduleItem = ({ heading, colour, time, selected, ...props }) => (
  <Box
    fullWidth
    flexDirection="column"
    alignItems="flex-start"
    bg={selected ? '#7D62F1' : 'transparent'}
    borderRadius={5}
    pl={4}
    pt={4}
    {...props}>
    <Text mb={2} fontSize={2} color={selected ? 'background' : 'foreground'}>{heading}</Text>
    <Box>
      <Box round width={8} height={8} bg={`${colour}.5`} mr={2} />
      <Text color={selected ? 'background' : 'grayscale.3'}>{time}</Text>
    </Box>
    <Spacer mt={4} length="100%" direction="horizontal" bg={!selected ? 'grayscale.8' : 'transparent'} thickness="3px" />
  </Box>
);

const CalendarItem = ({ date, day, pips, selected, ...props }) => (
  <Box
    flexDirection="column"
    bg={selected ? '#7D62F1' : 'grayscale.8'}
    color={selected ? 'background' : 'foreground'}
    borderRadius={5}
    py={3}
    px="25px"
    {...props}>
    <Text color="inherit" fontSize={2}>{date}</Text>
    <Text color="inherit" fontSize={0} mb={2}>{day}</Text>
    <BoxList css={`> * + * { margin-left: 4px; }`}>
      {pips.map(p => (
        <BoxListItem key={`pip__${date}__${p}`}>
          <Box width={4} height={4} bg={`${p}.6`} round />
        </BoxListItem>
      ))}
    </BoxList>
  </Box>
);

const SuperText = styled(Text)`
  position: relative;
  &::after {
    content: '${props => props.superText}';
    position: absolute;
    top: 2px;
    right: -8px;
    color: ${props => props.theme.colors.greens[5]};
    font-size: ${props => props.theme.fontSizes[0]}px;
  }
`;

const FadeBox = styled(Box)`
  background: linear-gradient(to bottom, hsla(0, 0%, 100%, 0) 0%, hsla(0, 0%, 100%, 1) 50%);
`;

const Six = () => (
  <Box fullWidth fullHeight bg="#F3C885">
    <Card
      flexDirection="column"
      width={375}
      height={812}
      justifyContent="flex-start"
      borderRadius="30px"
      bg="background"
      alignItems="flex-start"
      bg="grayscale.9">
      <Card fullWidth pt={5} mb={5} flexDirection="column" borderRadius="30px" boxShadowSize="l" boxShadowIntensity={0.2}>
        <Box fullWidth justifyContent="space-between" mb={3} pl={5} pr={4}>
          <Box alignItems="baseline" mr={4}>
            <Text fontSize={6} mr={2} color="grayscale.2">June, 17</Text>
            <Text fontSize={5} color="grayscale.5">Monday</Text>
          </Box>

          <ChevronLeft size={36} color="grayscale.6" />
          <ChevronRight size={36} color="grayscale.6"/>
        </Box>

        <Box fullWidth overflow="hidden" position="relative" height={82} mb={5}>
          <BoxList css={`> * + * { margin-left: 8px; }`} left={32} position="absolute">
            {calendar.map(({ id, ...c }) => (
              <BoxListItem key={`calendaritem__${id}`}>
                <CalendarItem {...c} />
              </BoxListItem>
            ))}
          </BoxList>
        </Box>

        <Spacer direction="horizontal" thickness="4px" width="15%" bg="grayscale.7" mb={3} />
      </Card>

      <Box fullWidth overflow="hidden" position="relative" height={42} mb={5}>
        <BoxList css={`> * + * { margin-left: 8px; }`} left={42} position="absolute">
          {tags.map(t => (
            <BoxListItem key={`tag__${t.label}`}>
              <Tag {...t} />
            </BoxListItem>
          ))}
        </BoxList>
      </Box>

      <SuperText ml={5} mb={3} superText={5} fontSize={5} color="grayscale.3">Schedule</SuperText>

      <BoxList flexDirection="column" fullWidth css={`li:last-child span:last-child { background: transparent; }`}>
        {schedule.map(s => (
          <BoxListItem fullWidth key={`schedule-item__${s.id}`} flexDirection="column" zIndex={1} ml={s.selected ? -6 : 0}>
            <ScheduleItem {...s} />
          </BoxListItem>
        ))}
      </BoxList>

      <FadeBox position="absolute" alignItems="flex-end" zIndex={1} bottom={0} left={0} fullWidth height={96} borderRadius="0px 0px 30px 30px">
        <Spacer direction="horizontal" thickness="4px" width="25%" bg="grayscale.7" mb={3} />
      </FadeBox>

      {/* Green add button with shadow */}
      <Box bg="greens.5" borderRadius={5} width={84} height={84} position="absolute" right={32} bottom={40} zIndex={1}>
        <Add size={36} color="white" />
      </Box>
    </Card>
  </Box>
);

export default Six;