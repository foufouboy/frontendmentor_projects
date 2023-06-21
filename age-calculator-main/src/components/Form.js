import React from "react";
import ArrowIcon from "../assets/icon-arrow.svg";

class Form extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { days, months, years } = this.props.date;
        const { setUnit, setResult } = this.props;

        return (
            <div className="form-component">
                <form action="#">
                    <fieldset className="inputs">
                        <div className="input">
                            <label htmlFor="day">Day</label>
                            <input 
                            min="1"
                            max="31"
                            type="number" 
                            value={days}
                            onChange={e => setUnit(e.target.value, "days")}/>
                        </div>
                        <div className="input">
                            <label htmlFor="month">Month</label>
                            <input 
                            min="1"
                            max="12"
                            type="number" 
                            value={months}
                            onChange={e => setUnit(e.target.value, "months")}/>
                        </div>
                        <div className="input">
                            <label htmlFor="year">Year</label>
                            <input 
                            type="number" 
                            value={years}
                            onChange={e => setUnit(e.target.value, "years")}/>
                        </div>
                    </fieldset>
                    <hr />
                    <div className="button-container">
                        <button 
                        className="submit-button" 
                        onClick={e => {
                                e.preventDefault();
                                setResult();
                            }}>
                            <img src={ArrowIcon} alt="arrow icon for the button" />
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;
