import React from "react";

class Results extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { results } = this.props;

        return (
            <div className="results-component">
                <p className="years">
                    <span>{results.years}</span> years
                </p>
                <p className="months">
                    <span>{results.months}</span> months
                </p>
                <p className="days">
                    <span>{results.days}</span> days
                </p>
            </div>
        );
    }
}

export default Results;
