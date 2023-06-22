import React from "react";
import Calculator from "./components/Calculator";
import Footer from "./components/Footer";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        return (
            <>
                <Calculator/>
                <Footer/>
            </>
        );
    }
}

export default App;
