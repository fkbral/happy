import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body, input, textarea, button {
  font: 600 18px 'Nunito', sans-serif;
  color: #fff;
}

`;

export default GlobalStyle;
