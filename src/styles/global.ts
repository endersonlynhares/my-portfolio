import { createGlobalStyle } from "styled-components";
import Background from "../assets/cards/background.png"
export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root{
    font-size: 62.5%;
  }

  html{
    scroll-behavior: smooth;
    text-size-adjust: 100%;
    height: 100vh;
  }

  body{
    background: url(${Background}) no-repeat center center fixed ;
    background-color: ${props => props.theme.colors["--background"]};
    font-size: 1.6rem;
    font-family: 'Inter', sans-serif;
    color: ${props => props.theme.colors["--base-text"]};
  }
  
  h1, h2, h3{
    font-family: 'Playfair Display', serif;
  }

  input, textarea, button{
    font-family: 'Inter', sans-serif;
  }

  a{
    text-decoration: none;
  }

`