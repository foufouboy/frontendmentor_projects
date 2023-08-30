import { styled } from "styled-components";

export const StyledScorePanel = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    padding: 30px 50px;
    padding-bottom: 40px;
    text-align: center;
    background: ${() => {
        return `
            linear-gradient(
    hsla(241, 81%, 54%, .8),
    hsla(241, 81%, 54%, 1)
            ) 
        `;
    }};
/*    background: ${() => {
        return `
            linear-gradient(
    hsla(256, 72%, 46%, .8), 
    hsla(256, 72%, 46%, 1), 
            ) 
        `;
    }}; */
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;

    .text-evaluation,
    .score-number {
        color: ${({ theme }) => theme.neutral.white}; 
    }

    & > p:nth-child(1) {
        color: rgba(255, 255, 255, .7);
        font-weight: 700;
        font-size: 20px;
    }

    .stats {
        font-size: 16px;
        color: rgba(255, 255, 255, .7);

    }

    .score {
        background: ${() => {
            return `linear-gradient(
                hsla(241, 72%, 46%, .5), 
                hsla(241, 72%, 46%, 0) 
            );`;
        }};
        border-radius: 360px;
        padding: 15px;
        width: 130px;
        height: 130px;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
    }

    .score-number {
        font-size: 3rem;
        font-weight: 800;
    }

    .of-one-hundred {
        font-size: 16px;
        font-weight: 700;
        color: rgba(255, 255, 255, .4);
    }

    .text-evaluation {
        font-size: 1.8rem; 
        font-weight: 700;
    }

    @media screen and (min-width: 700px) {
        border-radius: 30px;
        
        .score {
            width: 190px;
            height: 190px;
        }

        .score-number {
            font-size: 4rem;
        }

        .text-evaluation {
            margin-bottom: -20px;
            font-size: 2rem;
        }

    }
`;
