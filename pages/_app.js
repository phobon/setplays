import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { theme } from '@phobon/base';
import { AnimatePresence } from 'framer-motion';

import { MDXProvider } from '@mdx-js/react';

import Layout from '../components/Layout';

const components = {
  // Map components as required here. Move this to local state to update
  // at runtime, which may not really be needed
};

export default class SetPlaysApp extends App {
  render () {
    const { Component, pageProps, router } = this.props;
    return (
      <>
        <Head>
          <title>set plays</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="title" content="set plays" />
          <meta name="description" content="Creative coding, explorations and experiments" />
          <link rel="icon" href="/static/favicon.ico" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://github.com/phobon/setplays" />
          <meta property="og:title" content="set plays" />
          <meta property="og:description" content="Creative coding, explorations and experiments" />
          <meta property="og:image" content="" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://github.com/phobon/setplays" />
          <meta property="twitter:title" content="set plays" />
          <meta property="twitter:description" content="Creative coding, explorations and experiments" />
          <meta property="twitter:image" content="" />

        </Head>
        <ThemeProvider theme={theme}>
          <MDXProvider components={components}>
            <Layout pathname={router.pathname}>
              <AnimatePresence exitBeforeEnter>
                <Component {...pageProps} key={router.route} />
              </AnimatePresence>
            </Layout>
          </MDXProvider>
        </ThemeProvider>
      </>
    )
  }
}