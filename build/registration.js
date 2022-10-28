"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registration = void 0;
const readline_sync_1 = __importDefault(require("readline-sync"));
const registration = () => {
    const name = readline_sync_1.default.question("type your name: ");
    const age = readline_sync_1.default.questionInt("enter your age: ");
    return { name, age };
};
exports.registration = registration;
