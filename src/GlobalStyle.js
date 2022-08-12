import "typeface-roboto";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
    
    --Black:#F0F8FF;
    --White:#FFFFFF;
    --primary:#ddd;
    --dark:#333;
    --light:#fff;
    --Orange:#FFA500;
    --shadow:0 1px 5px rgba(104,104,104,0.8)
    /* Grey Colors */
    --Gainsboro:#DCDCDC;	
    --LightGray:#D3D3D3	; 	
    --Silver:#C0C0C0	; 	
    --DarkGray:#A9A9A9;	 	
    --DimGray:#696969;	 	
    --Gray:#808080	; 	
    --LightSlateGray:#778899	; 	
    --SlateGray:#708090	; 	
    --DarkSlateGray:#2F4F4F	 ;	
    --Black:#000000;
    /* Extra Colors */
    --main-yellow: #cbb470f2;
    --main-black: #272829;
    --main-white: #dfddd6;
    --main-font: 'Stardos Stencil', cursive;
    --mainTransition: all 0.25s ease-in-out;
    --mainSpacing: 1px;
    --lightShadow: 3px 8px 3px 1px rgba(0, 0, 0, 0.5);
    --darkShadow: 5px 10px 8px 2px rgba(0, 0, 0, 0.5);
}
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: 'Roboto Mono', monospace;
    
  }
  body {
    min-height: 100vh;
    background-color: rgb(9, 9, 9);
    color: white;
}
`;

export const HeaderTitle = styled.h1`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 2.3rem;
    letter-spacing: 2px;
    margin: 2.1rem;
`;

export const Description = styled.p`
    font-size: 1, 2rem;
    margin: 0 20px 20px 10px;
    color: whitesmoke;
`;

export const Paragraph = styled.p`
    font-size: 1.2rem;
    margin-top: 0;
    color: var(--light);
`;

export const Button = styled.button`
    padding: 10px 20px;
    margin: 20px;
    background-color: var(--White);
    color: var(--Black);
    font-family: var(--main-font);
    font-size: 0.9rem;
    cursor: pointer;
    border: none;
    outline: none;
    border-radius: 20px;
    transition: 0.6s;
    &:hover {
        background-color: var(--Silver);
        transition: 0.6s;
    }
`;

export default GlobalStyle;
