import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { theme } from '@phobon/base';

export default class SetPlaysApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render () {
    const { router, Component, pageProps } = this.props

    return (
      <Container>
        <Head>
          <title>Set Plays</title>
        </Head>
        <style jsx global>{`
          :root, body {
            width: 100vw;
            min-height: 100vh;
        
            margin: 0;
            padding: 0;
        
            font-size: 8px;
            overflow-x: hidden;
          }
        
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 1.43;
        
            // Specific layout resets.
            display: flex;
            flex: none;
            flex-direction: column;
          }
        
          *, ::before, ::after {
            box-sizing: border-box;
          }
        
          a,
          a:hover,
          a:visited {
            text-decoration: none;
          }
        
          ul {
            margin: 0;
            padding: 0;
            list-style-type: none;
          }
        
          code,
          kbd {
            font-family: "SF Mono", "Segoe UI Mono", "Roboto Mono", "Ubuntu Mono", Menlo, Courier, monospace;
          }
        
          template {
            display: none;
          }
        
          article,
          aside,
          details,
          figcaption,
          figure,
          footer,
          header,
          hgroup,
          main,
          menu,
          nav,
          section {
            display: block;
          }
        
          html,
          body,
          p,
          div,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          ul,
          ol,
          dl,
          img,
          pre,
          form,
          fieldset {
            margin: 0;
            padding: 0;
          }
        
          img,
          fieldset {
            border: 0;
          }

          #__next {
            width: 100vw;
            height: 100vh;
          }
        `}</style>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} key={router.pathname} />
        </ThemeProvider>
      </Container>
    );
  }
}