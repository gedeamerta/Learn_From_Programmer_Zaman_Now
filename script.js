/*
Operator Logic Non Boolean:
1. OR `||` -> dibaca dari kiri ke kanan, dan mengambil nilai yg truthy terlebih dahulu
2. AND `&&` -> dibaca dari kiri ke kanan, dan mengambil nilai yg falsey terlebih dahulu
*/

console.info("" || "NULL"); // "NULL"
console.info("0" || "NULL"); // "0"
console.info("" && "NULL"); // ""
console.info("0" && "NULL"); // "NULL"

// For In lebih cocok untuk tipe data Object

const person = {
    firstName: "Gede",
    lastName: "Amerta",
    age: 19
}

for (const property in person) {
    console.info(`${property}: ${person[property]}`);
}

// For Of akan lebih cocok untuk tipe data yg iterable seperti Array & String

const names = ["Gede", "Amerta", "Surya"];
for (const name of names) {
    console.info(`${name}`)
}