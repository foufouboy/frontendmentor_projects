import { StyledScorePanel } from "./styles/ScorePanel.styled";

export default function ScorePanel({ data }) {
    return (
        <StyledScorePanel className="score-panel">
            <p>Your Result</p>
            <div className="score">
                <p className="score-number">{getScore(data)}</p>
                <p className="of-one-hundred">of 100</p>
            </div>
            <p className="text-evaluation">
                Great
            </p>
            <p className="stats">
                You scored higher than 65% of the people who have taken these tests.
            </p>
        </StyledScorePanel>
    );
}

function getScore(data) {
    return Math
        .round(data
        .reduce((a, e) => a + e.score, 0) / data.length);
}