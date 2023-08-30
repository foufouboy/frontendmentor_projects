import styled from "styled-components";

export const Root = styled.div`
    display: grid;
    grid-template-rows: auto 1fr;
    font-size: ${({ theme }) => theme.fontSize};

    @media screen and (min-width: 700px) {
        grid-template-columns: 350px 350px;
        justify-content: center;
        box-shadow: 15px 11px 25px rgba(50, 50, 50, .1);
        border-radius: 30px;
    }
`
