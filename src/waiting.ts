import readline from "readline-sync";
import { seeList } from "./list";
import { menu } from "./menu";

const waitingOptions: string[] = ["new patient", "see waiting list", "get a coffee :)"];
let option: number | boolean;

export const waiting = () => {
    console.clear();
    console.log("you are in the waiting room...\n");
    option = readline.keyInSelect(waitingOptions, "feel free :D");

    switch(option) {
        case 1: {
            console.clear();
            seeList();
            readline.keyInPause();
            waiting();
        }
        break;
        case 2: {
            console.clear();
            console.log("here it is, fresh coffee\uD83C\uDF75 \n");
            readline.keyInPause();
            waiting();
        }
        break;
        case -1: {
            console.clear();
            option = readline.keyInYNStrict("do you really want to leave?\n");

            if (option === false) waiting();
            process.exit();
        }
    }

    return menu();
}