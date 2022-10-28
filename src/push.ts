import { Pacient } from "./pacient";
import { options } from "./menu";
import { list } from "./list";

export const push = (pacient: (object | any), i: number): void => {
    let data: Pacient = new Pacient(pacient.name, pacient.age, options[i]);

    if (pacient.age >= 60) {
        let first: any = list[0];
        let second: any = list[1];
        
          first.age > second.age ? list.splice(0, 0, data) : list.splice(second, 0, data);
    } else list.push(data);
}