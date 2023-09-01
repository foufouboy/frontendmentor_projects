import styled from "styled-components";

export const StyledFooter = styled.footer`
    background-color: ${({ theme }) => theme.colors.footer};
    color: #fff;
    padding: 100px 0 60px;

    ul {
        list-style-type: none;
    }

    ul li {
        margin-bottom: 25px;
    }

    p {
        text-align: center;
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

    @media (max-width: ${({ theme }) => theme.mobile}) {
        text-align: center;

        ul {
            padding: 0;
        }

        ul li {
            margin-bottom: 10px;
        }
        
        p {
            text-align: center;
        }
    }
`