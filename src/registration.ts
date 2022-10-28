import readline from "readline-sync";

export const registration = (): object => {
    const name: string = readline.question("type your name: ");
    const age: number = readline.questionInt("enter your age: ");

    return {name, age};
}