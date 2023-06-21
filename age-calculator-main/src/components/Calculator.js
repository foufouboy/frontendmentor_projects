import React from "react";
import Form from "./Form";
import Results from "./Results";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: {
                days: "",
                months: "",
                years: "",
            }
        };

        this.setUnit = this.setUnit.bind(this);
        this.setResult = this.setResult.bind(this);
        this.results = {
            years: "--",
            months: "--",
            days: "--", 
        };
    }

    setResult() {
        const { date } = this.state;

        if (this.isValid(date)) {
            console.log(true);
            this.results = this.calculateAgeFrom(date);
        } 
        console.log(false);
    }

    isValid(date) {

        const dateExists = (years, months, days) => {
            return new Date(years, months - 1, days).getDate() === days;
        }
        const today = new Date();
        let { years, months, days } = date;
        const formatedDate = new Date(`${years}/${months}/${days}`);
        console.log(date);
        console.log(formatedDate);

        years = +years;
        months = +months;
        days = +days;
        
        if (!(years && months && days)) return false;
        if ((months < 1 || 12 < months) ||
            (days < 1 || 31 < days)) return false;
        if (!dateExists(years, months, days)) return false;
        if (formatedDate >= today) return false;

        return true;
    }

    calculateAgeFrom(date) {
        date = new Date(`${date.years}/${date.months}/${date.days}`);
        const today = new Date();
        const age = {
            years: 0,
            months: 0,
            days: 0,
        };

        age.years = today.getFullYear() - date.getFullYear(); // 21;
        age.months = today.getMonth() - date.getMonth(); // -3;
        
        if (age.months < 0) {
            age.years--; // 20;
            age.months = 12 - -age.months; // 9;
        }

        age.days = today.getDate() - date.getDate(); // -4;

        if (age.days < 0) {
            age.months--;
            age.days = 30 - -age.days; // 26
        }

        return age;
    }

    setUnit(value, unit) {
        if (unit !== "days" && 
            unit !== "months" && 
            unit !== "years") return;

        this.setState(prevState => ({
            date: {
                ...prevState.date,
                [unit]: value, 
            }
        }));
    }

    render() {
        return (
            <div className="calculator-component">
                <Form 
                date={this.state.date}
                setUnit={this.setUnit}
                setResult={this.setResult}/>
                <Results results={this.results}/>
            </div>
        );
    }
}

export default Calculator;
