import { createGlobalStyle } from "styled-components";
import MontserratItalic from "../assets/fonts/Montserrat-Italic-VariableFont_wght.ttf";
import Montserrat from "../assets/fonts/Montserrat-VariableFont_wght.ttf";

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Roboto Condensed';
  src: url(${MontserratItalic}) format('ttf'),
       url(${Montserrat}) format('ttf');
}
`;

export default FontStyles;
