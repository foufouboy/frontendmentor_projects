import { Button } from "./styles/Button.styled";
import { StyledGetStarted } from "./styles/GetStarted.styled"


export default function GetStarted() {

    return (
        <StyledGetStarted>
            <h3>Ready To Build Your Community?</h3>
            <Button bg="hsl(322, 100%, 66%)" color="#fff" className="get-started-button">
                Get Started For Free
            </Button>
        </StyledGetStarted>
    );
}
