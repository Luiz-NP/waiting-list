import readline from "readline-sync";
import { seeList } from "./list";

const waitingOptions: string[] = ["new patient", "see waiting list", "get a coffee :)"];
let option: number | string | boolean;

export const waiting = () => {
    console.clear();
    console.log("you are in the waiting room...\n");
    option = readline.keyInSelect(waitingOptions, "feel free :D");

    switch(option) {
        case 0: return 0;
        case 1: {
            console.clear();
            console.log(seeList());
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
            option = readline.keyInYN("do you really want to leave?\n");
            
            if (option === false) waiting();
            if (option !== true) {
                console.log("I think that was a no ;D\n");
                readline.keyInPause();
                waiting();
            }
            
            return -1;
        }
    }
}