import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background: #fff;
        color: hsl(192, 100%, 9%);
        font-family: "Poppins", sans-serif;
        font-size: 18px;
        margin: 0;
    }

    img {
        max-width: 100%;
    }

    .hero {
        position: relative;
        display: flex;
        flex-flow: column;
        align-items: center;
        padding: 80px 50px;
        padding-bottom: 200px;
    }

    @media (max-width: ${({theme}) => theme.mobile}) {
        body {
            font-size: 15px;
        }

        .hero {
            padding-left: 20px;
            padding-right: 20px;
        }
    }
`