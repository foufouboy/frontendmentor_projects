import styled from "styled-components";

export const StyledHeader = styled.header`
    background: 
        url("./images/bg-hero-desktop.svg"), 
        hsl(193, 100%, 96%, .8);
    background-size: contain;
    padding: 40px 0;

    h1 {
        font-weight: 600;
        margin-bottom: 20px;
        font-size: 2.4rem;
    }

    p {
        margin-bottom: 25px;
    }

    .header-main {
        margin-top: 50px;
        margin-bottom: 10px;
    }

    @media (max-width: ${({theme}) => theme.mobile}) {
        font-size: 15px;
        text-align: center;

        & > div {
            padding: 0 20px;
        }

        h1 {
            font-size: 1.5rem;
        }
    }
`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;


    @media (max-width: ${({theme}) => theme.mobile}) {
        button {
            padding: 5px 20px;
            font-size: 13px;
            color: black;
        }
    }

    button:hover {
        opacity: .8;
        color: rgba(50, 50, 50, .8);
    }
`

export const Logo = styled.img`
    @media (max-width: ${({theme}) => theme.mobile}) {
        width: 100px;
    }

    width: 200px;
`

export const Image = styled.img`
    width: 56%;
    margin-left: 40px;

    @media (max-width: ${({theme}) => theme.mobile}) {
        margin-top: 40px;
        margin-left: 0;
        width: 100%;
    }
`

