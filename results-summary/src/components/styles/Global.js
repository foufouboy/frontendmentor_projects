import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "Hanken Grotesk";
        display: grid;
        height: 100vh;
    }

    @media screen and (min-width: 700px) {

        #root {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`