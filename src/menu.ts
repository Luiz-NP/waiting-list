import readline from "readline-sync";
import { registration } from "./registration";
import { regular, preferential } from "./list";
import { exam } from "./exam";

export let pacient: object;

export const menu = (): any => {
    console.clear();
    if ((regular.length + preferential.length) >= 2) {
        console.log("sorry, we have no more vacancies today :(\n");
        readline.keyInPause();
        process.exit();
    }

    console.log("Hi, Welcome\n");
    readline.keyInPause();
    console.clear();

    console.log("To use our services, you need a registration.\n");
    readline.keyInPause();
    console.clear();
    
    pacient = registration();

    exam();

    return menu();
}

menu();