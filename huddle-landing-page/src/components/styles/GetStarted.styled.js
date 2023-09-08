import styled from "styled-components";

export const StyledGetStarted = styled.div`
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: column;
    gap: 40px;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    padding: 35px 60px;
    width: 60%;
    transform: translateY(50%);
    
    h3 {
        font-size: 2.3rem;
        font-weight: 600;
    }

    button {
        font-size: 1.2rem;
    padding: 20px 70px;
    }

    @media (max-width: ${({theme}) => theme.mobile}) {
        width: 90%;
        padding: 30px 0;
        gap: 20px;
        text-align: center;

        h3 {
            font-size: 1.05rem;
        }

        button {
            padding: 10px 60px;
            font-size: .75rem;
        }
    }
`;