import React from "react";
import ArrowIcon from "../assets/icon-arrow.svg";

class Form extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { days, months, years } = this.props.date;
        const { setUnit, setResult } = this.props;
        const { errors } = this.props;

        return (
            <div className="form-component">
                <form action="#">
                    {errors.general && <p className="error-message">{errors.general}</p>}
                    <fieldset className="inputs">
                        <div className={"input " + (errors.days && "invalid-input")}>
                            <label htmlFor="day">Day</label>
                            <input 
                            min="1"
                            max="31"
                            placeholder="DD"
                            type="number" 
                            value={days}
                            onChange={e => setUnit(e.target.value, "days")}/>
                            { errors.days && <p className="error-message">{errors.days}</p>}
                        </div>
                        <div className={"input " + (errors.months && "invalid-input")}>
                            <label htmlFor="month">Month</label>
                            <input 
                            min="1"
                            max="12"
                            placeholder="MM"
                            type="number" 
                            value={months}
                            onChange={e => setUnit(e.target.value, "months")}/>
                            { errors.months && <p className="error-message">{errors.months}</p>}
                        </div>
                        <div className={"input " + (errors.years && "invalid-input")}>
                            <label htmlFor="year">Year</label>
                            <input 
                            type="number" 
                            placeholder="YYYY"
                            value={years}
                            onChange={e => setUnit(e.target.value, "years")}/>
                            { errors.years && <p className="error-message">{errors.years}</p>}
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
