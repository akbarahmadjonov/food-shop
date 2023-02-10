import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle` 
    * {
  margin: 0;
  padding: 0;
}

body {
  background-color: #252836;
  color: #fff;
  font-family: 'Barlow', sans-serif;
}

.container {
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 20px;
}
`;
