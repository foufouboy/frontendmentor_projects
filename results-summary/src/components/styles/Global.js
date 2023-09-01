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

    #root {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: column;

        & > p:last-child {
            margin-top: 50px;
            font-size: 1.5rem;
            font-weight: 700;

            & > a {
                text-decoration: none;
                color: inherit;
            }
        }
    }

`