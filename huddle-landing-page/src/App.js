import { ThemeProvider } from "styled-components";
import { Container } from "./components/styles/Container.styled";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { theme } from "./theme";
import { GlobalStyles } from "./components/styles/Global";
import content from "./content";
import Card from "./components/Card";
import GetStarted from "./components/GetStarted";

function App() {
  return (

    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Container className="hero">
        {content.map((item, index) => (
          <Card key={index} item={item}></Card>
        ))}
        <GetStarted/>
      </Container>
      <Footer></Footer>
    </ThemeProvider>
  );
}

export default App;
