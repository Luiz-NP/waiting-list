"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.waiting = void 0;
const readline_sync_1 = __importDefault(require("readline-sync"));
const list_1 = require("./list");
const waitingOptions = ["new patient", "see waiting list", "get a coffee :)"];
let option;
const waiting = () => {
    console.clear();
    console.log("you are in the waiting room...\n");
    option = readline_sync_1.default.keyInSelect(waitingOptions, "feel free :D");
    switch (option) {
        case 0: return 0;
        case 1:
            {
                console.clear();
                console.log((0, list_1.seeList)());
                readline_sync_1.default.keyInPause();
                (0, exports.waiting)();
            }
            break;
        case 2:
            {
                console.clear();
                console.log("here it is, fresh coffee\uD83C\uDF75 \n");
                readline_sync_1.default.keyInPause();
                (0, exports.waiting)();
            }
            break;
        case -1: {
            console.clear();
            option = readline_sync_1.default.keyInYN("do you really want to leave?\n");
            if (option === false)
                (0, exports.waiting)();
            if (option !== true) {
                console.log("I think that was a no ;D\n");
                readline_sync_1.default.keyInPause();
                (0, exports.waiting)();
            }
            return -1;
        }
    }
};
exports.waiting = waiting;
