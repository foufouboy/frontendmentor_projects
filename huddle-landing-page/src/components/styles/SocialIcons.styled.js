import styled from "styled-components";

export const StyledSocialIcons = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    gap: 2px;
    margin-top: 40px;
    align-self: center;

    a {
        border: 1px solid #fff;
        border-radius: 50%;
        color: #fff;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
        height: 32px;
        width: 32px;
    }

    a:hover {
        color: hsl(322, 100%, 66%);
        border-color: hsl(322, 100%, 66%);
    }
`