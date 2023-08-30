import { styled } from "styled-components";

export const SummaryPanelStyled = styled.div`
    padding: 30px;
    display: flex;
    flex-flow: column;
    gap: 30px;

    .summary-title {
        font-weight: bold;
        font-size: 19px;
    }

    .result-box {
        display: flex;
        justify-content: start; 
        align-items: center;
        background: rgba(50, 50, 50, .1);
        padding: 20px;
        border-radius: 5px;
        font-size: 17px;
        font-weight: 700;
    }

    .result-box:nth-child(1) {
        background: hsla(0, 100%, 67%, .1);
        color: ${({ theme }) => theme.primary.lightRed};
    }
    
    .result-box:nth-child(2) {
        background: hsla(39, 100%, 56%, .1);
        color: ${({ theme }) => theme.primary.orangeyYellow};
    }

    .result-box:nth-child(3) {
        background: hsla(166, 100%, 37%, .05);
        color: ${({ theme }) => theme.primary.greenTeal};
    }
    
    .result-box:nth-child(4) {
        background: hsla(214, 85%, 45%, .1);
        color: ${({ theme }) => theme.primary.cobaltBlue}; 
    } 

    .result-box img {
        margin-right: 10px;
        width: 1.4rem;
    }

    .box-result {
        margin-left: auto;
        color: black;
    }

    .box-result span {
        color: rgba(50, 50, 50, .5);
    }

    .summary-stats {
       display: flex;
       flex-flow: column;
       gap: 20px;
    }

    button.continue {
        cursor: pointer;
        background: ${({ theme }) => theme.neutral.darkGrayBlue};
        color: white;
        font-family: inherit;
        font-size: 1.1rem;
        font-weight: bold;
        outline: none;
        border: 0;
        padding: 15px;
        border-radius: 55px;
    }

    button.continue:hover {
        background: linear-gradient(
            hsla(241, 81%, 54%, .8),
            hsla(241, 81%, 54%, 1)
        );
    }

    button.continue:active {
        opacity: .9;
    }
`;

