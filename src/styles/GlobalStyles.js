import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        line-height: 1.4;
        outline: none;
    }
    html {
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    img, video, svg{
        max-width: 100%;
        height: auto;
    }
    
    *, *::before, *::after {
        box-sizing: inherit;
    }
    
    ul, li, h1, h2, h3, p, button {
        margin: 0;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    button {
        background: transparent;
        border: 0;
        outline: 0;
    }

    body {
        background: #fefefe;
        height: 100vh;
        margin: 0 auto;
        max-width: 500px;
        overscroll-behavior: none;
        width: 100%;
    }

    #root {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
        overflow-x: hidden;
        min-height: 100vh;
        padding-bottom: 70px;
    }
`;