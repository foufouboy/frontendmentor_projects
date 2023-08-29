import { StyledScorePanel } from "./styles/ScorePanel.styled";

export default function ScorePanel() {
    return (
        <StyledScorePanel className="score-panel">
            <p>Your Result</p>
            <div className="score">
                <p className="score-number">76</p>
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
