import { Hooman } from "./hoomans.js";
import { hoomans } from "./hoomans.js";

function presentHoomans(hoomans: Hooman[]): void {
    hoomans.map(hooman => {
        const pronoun = hooman.sex === "M" ? "he" : "she";
        console.log(`This is ${hooman.name} and ${pronoun} is ${hooman.age}`);
    });
}

presentHoomans(hoomans);


