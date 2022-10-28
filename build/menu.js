"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = void 0;
const readline_sync_1 = __importDefault(require("readline-sync"));
const registration_1 = require("./registration");
const push_1 = require("./push");
const list_1 = require("./list");
const waiting_1 = require("./waiting");
exports.options = ["simple exams", "tomography", "X-ray"];
let pacient;
let option;
do {
    console.clear();
    if (list_1.list.length >= 20) {
        console.log("sorry, we have no more vacancies today :(\n");
        readline_sync_1.default.keyInPause();
        option = -1;
        continue;
    }
    console.log("Hi, Welcome\n");
    readline_sync_1.default.keyInPause();
    console.clear();
    console.log("To use our services, you need a registration.\n");
    readline_sync_1.default.keyInPause();
    console.clear();
    pacient = (0, registration_1.registration)();
    option = readline_sync_1.default.keyInSelect(exports.options, "which exam do you want to take?");
    switch (option) {
        case 0:
            {
                (0, push_1.push)(pacient, option);
            }
            break;
        case 1:
            {
                (0, push_1.push)(pacient, option);
            }
            break;
        case 2:
            {
                (0, push_1.push)(pacient, option);
            }
            break;
        case 3:
            {
                (0, list_1.seeList)();
                readline_sync_1.default.keyInPause();
            }
            break;
    }
    console.clear();
    option = (0, waiting_1.waiting)();
} while (option !== -1);
