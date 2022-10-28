import readline from "readline-sync";
import { registration } from "./registration";
import { push } from "./push";
import { list, seeList } from "./list";
import { waiting } from "./waiting";

export const options: string[] = ["simple exams", "tomography", "X-ray"];

let pacient: object;

let option: number | undefined;

do {
    console.clear();
    if (list.length >= 20) {
        console.log("sorry, we have no more vacancies today :(\n");
        readline.keyInPause();
        option = -1;
        continue;
    }

    console.log("Hi, Welcome\n");
    readline.keyInPause();
    console.clear();

    console.log("To use our services, you need a registration.\n");
    readline.keyInPause();
    console.clear();
    
    pacient = registration();

    option = readline.keyInSelect(options, "which exam do you want to take?");

    switch(option) {
        case 0: {
            push(pacient, option);
        }
        break;
        case 1: {
            push(pacient, option);
        }
        break;
        case 2: {
            push(pacient, option);
        }
        break;
        case 3: {
            seeList();
            readline.keyInPause();
        }
        break;
    }

    console.clear();
    option = waiting();

} while(option !== -1);