import styled from "styled-components";

export const StyledCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    margin: 20px 0;
    padding: 60px;
    padding-left: 10%;

    &:nth-child(even) {
        flex-direction: row-reverse;

        & > div:nth-child(2) {
            justify-content: start;
        }
    }

    img {
        width: 80%;
    }

    & > div {
        flex: 1;
    }

    & > div:nth-child(2) {
        display: flex;
        justify-content: end;
    }

    @media (max-width: 650px) {
        flex-direction: column-reverse;
        align-items: center;
        padding: 50px 15px 30px 15px;
        text-align: center;
        gap: 40px;
        font-size: 14px;

        h2 {
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 20px;
        }

        p {
            padding: 0 15px;
        }

        &:nth-child(even) {
            flex-direction: column-reverse;

            & > div:nth-child(2) {
                justify-content: space-between;
            }
        }

        & > div {
            display: flex;
            flex-flow: column;
            align-items: center;
        }
    }
`