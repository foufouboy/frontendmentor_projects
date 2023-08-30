import { GlobalStyles } from "./components/styles/Global.js";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme.js";
import { Root } from "./components/styles/Root.styled.js";
import ScorePanel from "./components/ScorePanel";
import SummaryPanel from "./components/SummaryPanel";
import data from "./data.json";

console.log(data);

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Root>
            <GlobalStyles/>
            <ScorePanel data={data}/>
            <SummaryPanel data={data}/>
        </Root>
    </ThemeProvider>
  );
}

export default App;
