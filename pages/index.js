import React from 'react';
import Link from 'next/link';
import 'isomorphic-unfetch';
import { Link as BaseLink } from '@phobon/base';

import MotionContainer from '../components/MotionContainer';

import { useApi } from '../hooks';

const Index = ({ ...props }) => {
  const sources = useApi('api/sources');
  return (
    <MotionContainer
      space={3}
      alignItems='flex-start'>
      {sources.map(({ key, source }) => (
        <Link key={key} href={`/${key}`} title={source} passHref>
          <BaseLink>{source}</BaseLink>
        </Link>
      ))}
    </MotionContainer>
  );
};

// Index.getInitialProps = async function() {
//   const res = await fetch('https://localhost:3000/api/sources');
//   const data = await res.json();
//   return {
//     sources: data,
//   };
// };

export default Index;