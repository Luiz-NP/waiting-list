import readline from "readline-sync";
import { push } from "./push";
import { pacient} from "./menu";
import { waiting } from "./waiting";

export const options: string[] = ["simple exams", "tomography", "X-ray"];
export let option: number | boolean;

export const exam = () => {
    console.clear();
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
        case -1: {
            console.clear();
            option = readline.keyInYNStrict("do you really want to leave?\n");

            if (option === false) exam();
            process.exit();
        }
    }

    return waiting();
}