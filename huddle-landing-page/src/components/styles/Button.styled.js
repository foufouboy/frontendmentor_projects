import styled from "styled-components";

export const Button = styled.button`
    border-radius: 50px;
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    font-family: inherit;
    padding: 13px 60px;
    background-color: ${({ bg }) => bg || "#fff"};
    color: ${({ color }) => color || "#000"};

    &:hover {
        opacity: 0.5;
    }

    @media (max-width: ${({theme}) => theme.mobile}) {
        font-size: 14px;
    }
`