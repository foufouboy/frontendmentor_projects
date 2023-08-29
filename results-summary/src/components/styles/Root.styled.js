import styled from "styled-components";

export const Root = styled.div`
    display: grid;
    grid-template-rows: auto 1fr;
    font-size: ${({ theme }) => theme.fontSize};
`
