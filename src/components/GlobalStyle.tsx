import { createGlobalStyle } from "styled-components";
// TODO: Import your own font.
// import someFont from "../assets/fonts/someFont.woff";
// import someOtherFont from "../assets/fonts/someOtherFont.woff";

// TODO: Add your font here and move this line down into GlobalStyle.
// @font-face {
//   font-family: "SomeFont";
//   src: url(${someFont}) format("woff");
//   font-weight: 400;
// } 

// @font-face {
//   font-family: "SomeOtherFont";
//   src: url(${someOtherFont}) format("woff");
//   font-weight: 600;
// }

const GlobalStyle = createGlobalStyle`
  :root {
    --fontFamily: SomeFont, "Helvetica Neue", "Arial", sans-serif;
    --fontWeightNormal: 400;
    --fontWeightBold: 600;
    --textColor: #000;
    --unit: 4px;
  }

  * {
    box-sizing: border-box;


  body {
    margin: 0;
    font-family: var(--fontFamily);
    font-weight: var(--fontWeightNormal);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--textColor);
  }
`;

export default GlobalStyle;
