import { hoomans } from "./hoomans.js";
function presentHoomans(hoomans) {
    hoomans.map(hooman => {
        const pronoun = hooman.sex === "M" ? "he" : "she";
        console.log(`This is ${hooman.name} and ${pronoun} is ${hooman.age}`);
    });
}
presentHoomans(hoomans);
