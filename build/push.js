"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.push = void 0;
const pacient_1 = require("./pacient");
const menu_1 = require("./menu");
const list_1 = require("./list");
const push = (pacient, i) => {
    let data = new pacient_1.Pacient(pacient.name, pacient.age, menu_1.options[i]);
    if (pacient.age >= 60) {
        let first = list_1.list[0];
        let second = list_1.list[1];
        first.age > second.age ? list_1.list.splice(0, 0, data) : list_1.list.splice(second, 0, data);
    }
    else
        list_1.list.push(data);
};
exports.push = push;
