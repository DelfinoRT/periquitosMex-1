import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    --main-bg: #F5F3E7;
    --header-bg: #5f5325;
    --nav-bg: #A38E40;
    --nav-item: #7e6d32;
    --text-header: #ece6bc;
    --text-para: #f5e37c;
    --nav-active: #7e6d32;
  }

  html {
    font-size: 10px;
    background-color: var(--main-bg);
    overflow: hidden;
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    outline: none;
  }

  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
`;

export default GlobalStyles;
