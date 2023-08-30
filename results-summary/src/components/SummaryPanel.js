import { SummaryPanelStyled } from "./styles/SummaryPanel.styled";
import ReactionIcon from "../assets/images/icon-reaction.svg";
import MemoryIcon from "../assets/images/icon-memory.svg";
import VerbalIcon from "../assets/images/icon-verbal.svg";
import VisualIcon from "../assets/images/icon-visual.svg";

export default function SummaryPanel() {
    return (
        <SummaryPanelStyled className="summary">
            <p className="summary-title">Summary</p>
            <div className="summary-stats">
                <div className="result-box">
                    <img src={ReactionIcon} alt="reaction-icon" className="icon" />
                    <p className="name">Reaction</p>
                    <p className="box-result">80 <span>/ 100</span></p>
                </div>
                <div className="result-box">
                    <img src={MemoryIcon} alt="memory-icon" className="icon" />
                    <p className="name">Memory</p>
                    <p className="box-result">80 <span>/ 100</span></p>
                </div>
                <div className="result-box">
                    <img src={VerbalIcon} alt="verbal-icon" className="icon" />
                    <p className="name">Verbal</p>
                    <p className="box-result">80 <span>/ 100</span></p>
                </div>
                <div className="result-box">
                    <img src={VisualIcon} alt="visual-icon" className="icon" />
                    <p className="name">Visual</p>
                    <p className="box-result">80 <span>/ 100</span></p>
                </div>
            </div>
            <button className="continue">Continue</button>
        </SummaryPanelStyled>
    );
}
