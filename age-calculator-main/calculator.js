function calculateAgeFrom(date) {
    // The date is a Date object;
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

const myFathersBirthDate = new Date("1978/06/10");
const myMothersBirthDate = new Date("1982/06/06");
const manonBirthDate = new Date("2002/04/02");
const result = calculateAgeFrom(manonBirthDate);
console.log(result);


