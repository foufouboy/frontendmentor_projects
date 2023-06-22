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
            },
            results: {
                days: "--",
                months: "--",
                years: "--",
            },
            errors: {
                years: "",
                months: "",
                days: "",
                general: "",
            }
        };

        this.setUnit = this.setUnit.bind(this);
        this.setResult = this.setResult.bind(this);
        this.setError = this.setError.bind(this);
        this.resetErrors = this.resetErrors.bind(this);
    }

    resetErrors() {
        this.setState(prevState => ({
            ...prevState,
            errors: {
                days: "",
                months: "",
                years: "",
                general: "",
            },
        }))
    }

    setError(message, field) {
        this.setState(prevState => ({ 
            ...prevState,
            errors: {
                ...prevState.errors,
                [field]: message,
            }, 
        }));
        console.log(this.state);
    }

    setResult() {
        const { date } = this.state;

        this.resetErrors();

        if (this.isValid(date)) {

            this.setState(prevState => ({
                ...prevState,
                results: this.calculateAgeFrom(date),
            }));

        } 
    }

    isValid(date) {

        const dateExists = (years, months, days) => {
            return new Date(years, months - 1, days).getDate() === days;
        }

        const today = new Date();
        let { years, months, days } = date;
        let isValid = true;
        const formatedDate = new Date(years, months, days);

        years = +years;
        months = +months;
        days = +days;

        if (years < 1000) {
            formatedDate.setUTCFullYear(years);
        }

        console.log(formatedDate);
        console.log(date);


        if (months < 1 || 12 < months) {
            this.setError("Month not valid!", "months")
            isValid = false;
        }

        if (days < 1 || 31 < days) {
            this.setError("Day not valid!", "days");
            isValid = false;
        }

        if (!dateExists(years, months, days)) {
            this.setError("Must be a valid date", "general")
            isValid = false;
        }

        if (formatedDate >= today) {
            this.setError("Must be in the past", "general");
            isValid = false;
        }

        if (formatedDate == "Invalid Date") {
            this.setError("Must be a valid date", "general");
            isValid = false;
        }

        if (!date.months || !date.days || (date.years === "")) {
            for (let unit in date) {
                if (date[unit] === "") {
                    this.setError("Field required!", unit); 
                }
            }
            isValid = false;
        }

        return isValid;
    }

    calculateAgeFrom(date) {
        const today = new Date();
        const { years, months, days } = date;

        date = new Date(years, months, days);

        if (years < 1000) {
            date.setUTCFullYear(years);
        }

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
            ...prevState, 
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
                setResult={this.setResult}
                errors={this.state.errors}/>
                <Results results={this.state.results}/>
            </div>
        );
    }
}

export default Calculator;
