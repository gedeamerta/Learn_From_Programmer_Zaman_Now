export class Person {
    constructor (personName) {
        this.personName = personName;
    }

    sayHelloClass(personName) {
        console.info(`Hello Class my name is ${this.personName}`);
    }
}

export function sayHello() {
    console.info("Hello WOrld with Module");
}

export function shoutMyName(name) {
    console.info(`Hello my ${name}`);
}

export let myName = "Gede Amerta";