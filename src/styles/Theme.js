// import React from "react";
// import { ThemeProvider, createGlobalStyle } from "styled-components";
// import 'normalize.css';



// const theme = {
//   colors: {
//       lightGreen: '#04BFAD',
//       lightGreenTint: 'rgba(4,191,173,0.70)',
//       lightGreenShadow: '#038073',
//       black: '#0E0F13',
//       blackTint: 'rgba(14,15,19,0.55)',
//       darkGreen: '#027373',
//       darkGreenShadow: 'rgba(2,115,155,0.45)',
//       white: '#fff',
//       lightGrey: '#C1D4D9',
//       lightGreyTint: 'rgba(193,212,217,.65)',
//       darkGrey: '#979DA6'
//   },
//   breakpoints: {
//       mobile: `(min-width: 428px)`,
//       tablet: `(min-width: 768px)`,
//       laptop: `(min-width: 1024px)`,
//       desktop: `(min-width: 1280px)`
//   }
// };

// const AllStyles = createGlobalStyle`
// :root {
//   --light-green: #04BFAD;
//   --light-green-tint: rgba(4,191,173,0.70);
//   --light-green-shadow: #038073;
//   --black: #0E0F13;
//   --black-tint: rgba(14,15,19,.55);
//   --dark-green: #027373;
//   --dark-green-shadow: rgba(2,115,115,.45);
//   --white: #fff;
//   --light-grey: #C1D4D9;
//   --light-grey-tint: rgba(193,212,217,.65);
//   --dark-grey: #979DA6;
// }

// html {
//   font-size: 10px;
//   font-family: Montserrat, sans-serif;
//   scrollbar-width: thin;
//   scrollbar-color: var(--dark-green) var(--dark-green-shadow);
// }

// body {
//   margin: 0;
//   padding: 0;
//   background-color: ${({theme}) => theme.colors.black};
//   box-sizing: border-box;
// }
// fieldset {
//   border-color: rgba(0,0,0,0.1);
//   border-width: 1px;
// }
// button {
//   background: var(--dark-green);
//   color: var(--white);
//   border: 0;
//   padding: 0.6rem 1rem;
//   border-radius: 30px;
//   cursor: pointer;
//   --cast: 2px;
//   box-shadow: var(--cast) var(--cast) 0 var(--dark-green-shadow);
//   text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
//   transition: all 0.2s;
//   &:hover {
//     --cast: 4px;
//   }
// }
// .gatsby-image-wrapper img[src*=base64\\] {
//   image-rendering: -moz-crisp-edges;
//   image-rendering: pixelated;
// }
// /* Scrollbar Styles */
// body::-webkit-scrollbar {
//   width: 12px;
// }

// body::-webkit-scrollbar-track {
//   background: var(--dark-grey);
// }
// body::-webkit-scrollbar-thumb {
//   background-color: var(--dark-green) ;
//   border-radius: 6px;
//   border: 3px solid var(--dark-green-shadow);
// }
// hr {
//   border: 0;
//   height: 8px;
// }
// img {
//   max-width: 100%;
// }

// p, li {
//   letter-spacing: 0.5px;
//   color: var(--light-grey);
// }
// h1,h2,h3,h4,h5,h6 {
//   font-weight: normal;
//   margin: 0;
//   color: var(--light-grey);
// }
// a {
//   color: var(--white);
//   text-decoration-color: var(--dark-green);
//   /* Chrome renders this weird with this font, so we turn it off */
//   text-decoration-skip-ink: none;
// }
// `;


// const Theme = ({ children }) => ( 
//   <ThemeProvider theme={theme}>
//       <AllStyles />
//       {children}
//   </ThemeProvider>
// )

// export default Theme;

