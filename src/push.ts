import { Pacient } from "./pacient";
import { options } from "./exam";
import { regular, preferential } from "./list";

export const push = (pacient: (object | any), i: number): void => {
    let data: Pacient = new Pacient(pacient.name, pacient.age, options[i]);

    pacient.age >= 60 ? preferential.push(data) : regular.push(data);
}