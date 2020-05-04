import React from 'react';
import Link from 'next/link';
import { Stack, Link as BaseLink } from '@phobon/base';

import { useApi } from '../../hooks';

const Layout = ({ pathname, children, ...props }) => {
  // const sources = useApi('api/sources');

  return (
    <Stack {...props} fullWidth fullHeight>
      {/* {sources.map(({ key, source }) => (
        <Link key={key} href={`/${key}`} title={source} passHref>
          <BaseLink>{source}</BaseLink>
        </Link>
      ))} */}
      {children}
    </Stack>
  );
};

export default Layout;