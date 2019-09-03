import React from 'react';
import Link from 'next/link';

import { Stack, Link as BaseLink } from '@phobon/base';

import { useApi } from '../hooks';

export default () => {
  const sources = useApi('api/sources');
  return (
    <Stack space={3} alignItems='flex-start'>
      {sources.map(({ key, source, ...rest }) => (
        <Link key={key} href={`/${key}`} title={source} passHref>
          <BaseLink>{source}</BaseLink>
        </Link>
      ))}
    </Stack>
  );
};