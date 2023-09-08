import styled from "styled-components";

export const StyledFooter = styled.footer`
    background-color: ${({ theme }) => theme.colors.footer};
    color: #fff;
    font-size: 15px;
    padding: 100px 0 60px;
    padding-top: 200px;

    ul {
        list-style-type: none;
    }

    ul:nth-child(1) {
        width: 390px;
    }

    ul li {
        margin-bottom: 25px;
        display: flex;
        gap: 30px;
        align-items: start;
    }

    ul li img {
        width: 20px;
        height: auto;
        margin: 0
    }

    & > div > p:last-child {
        opacity: 1;
        font-family: "Outfit";
        font-size: 1.5rem;

        & > a {
            text-decoration: none;
            color: inherit;
        }
    }

    .footer-flex {
        align-items: start;
        justify-content: start;
        gap: 12%;
    }

    .footer-flex > ul {
        flex: initial;
    }

    .footer-links li:hover {
        cursor: pointer;
        text-decoration: underline;
        text-underline-offset: 4px;
    }

    img {
        width: 180px;
        margin-bottom: 20px;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {

        ul:nth-child(1) {
            width: auto;
            margin-bottom: 30px;
        }

        ul {
            padding: 0;
        }

        ul li {
            margin-bottom: 15px;
        }

        p {
            text-align: center;
        }
    }
`