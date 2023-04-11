import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root{
    --text: 'Heebo', sans-serif;

    --black-900: #060813;
    --black-700: #12141D;
    --white: #fff;
    --grey-10: #E9EAEF;
    --grey-300: #bec0ce;
    --blue: #3d416c;
    --twitter-blue: #1DA1F2;
    --pishure-red: #E21F3B;
    --pishure-light-red: #F3A4AF;
    

    --border-blue: 1px solid var(--blue);
    --radius: 0.3125rem;

    --font-1: 3rem;
    --font-2: 2.25rem;
    --font-3: 1.875rem;
    --font-4: 1.5rem;
    --font-5: 1.25rem;
    --font-6: 1rem;
    --font-7: 0.875rem;
    --font-8: 0.75rem;
  }


  *, *::before, *::after{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: inherit;
  }

  html, body{
    background: var(--black-900);
    font-family: var(--text);
    color: var(--white);
    overflow-x: hidden;
  }

  img{
    display: block;
  }

  input,
  button{
    border: none;
    outline: none;
    background: none;
    box-shadow: none;
  }

  button{
    cursor: pointer;
  }

  a{
    text-decoration: none;
  }

  .right__arrow {
    display: grid;
	place-items: center;
	width: 80px;
	height: 44px;
	position: absolute;
	background: var(--black-900);
  opacity: .85;
	right: -5px;
	bottom: 0;
	z-index: 100;
  cursor: pointer;
  font-size: 33px;
  }

  .left__arrow {
    display: grid;
	place-items: center;
	width: 80px;
	height: 44px;
  opacity: .85;
	position: absolute;
	background: var(--black-900);
	left: -5px;
	bottom: 0;
	z-index: 100;
  cursor: pointer;
  font-size: 33px;
  }

  .tags {
    padding: 0 20px;
    margin-bottom: 3rem;
  }

  .carousel-container {
    margin-bottom: 30px;
  }

  .carousel-item {
    margin-right: 0px;
  }

  .stat {
    transform: translateX(125%);
  }

  .photo {
    transform: translateX(0);
  }

  .activeMenu {
    background-color: #b4bbeb1a;
    border-left: 2px solid var(--pishure-red); 
    color: #fff !important;
    font-weight: 400;
  }

  .styled-checkbox {
  position: absolute; // take it out of document flow
  opacity: 0; // hide it

  & + label {
    position: relative;
    cursor: pointer;
    padding: 0;
  }

  // Box.
  & + label:before {
    content: '';
    margin-right: 10px;
    display: inline-block;
    vertical-align: text-top;
    width: 15px;
    height: 15.5px;
    border-radius: 2px;
    border: 1px solid #BEC0CE;
    background: transparent;

  }

  // Box hover
  &:hover + label:before {
    background: var(--pishure-red);
  }
  
  // Box focus
  &:focus + label:before {
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);
  }

  // Box checked
  &:checked + label:before {
    background: var(--pishure-red);
  }
  


  // Checkmark. Could be replaced with an image
  &:checked + label:after {
    content: '';
    position: absolute;
    left: 2px;
    top: 7px;
    background: white;
    width: 2px;
    height: 2px;
    box-shadow: 
      2px 0 0 white,
      4px 0 0 white,
      4px -2px 0 white,
      4px -4px 0 white,
      4px -6px 0 white,
      4px -8px 0 white;
    transform: rotate(45deg);
  }
}
`;
