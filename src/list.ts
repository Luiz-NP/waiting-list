type List = {
    name: string;
    age: number;
    exam: string;
}

export const regular: List[] = [];
export const preferential: List[] = [];

export const seeList = (): void => {
    console.log("regular list");
    console.table(regular.length > 0 ? regular : "\n[no patients]\n");

    console.log("preferential list");
    console.table(preferential.length > 0 ? preferential : "\n[no patients]\n");
}