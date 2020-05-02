import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-size: 8px;
    background-color: var(--c-background, hsl(0, 0%, 100%));
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.43;
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
  }

  img,
  fieldset {
    border: 0;
  }

  figure {
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
  }

  #__next {
    width: 100%;
    height: 100%;
    display: flex;
    flex: none;
    flex-direction: column;
    align-items: center;
  }
`;

export default GlobalStyles;