//  One Export
export class Person {
    constructor (personName) {
        this.personName = personName;
    }

    sayHelloClass(personName) {
        console.info(`Hello Class my name is ${this.personName}`);
    }

    sumNum(a,b) {
        console.info(`${a + b}`);
    }
}

export function sayHello() {
    console.info("Hello WOrld with Module");
}

export function shoutMyName(name) {
    console.info(`Hello my ${name}`);
}

export let myName = "Gede Amerta";

// Multiple Export
class Car {
    constructor (carName) {
        this.carName = carName;
    }

    repairCar(ourMoney, price) {
        let total = ourMoney - price;
        console.info(`I have money ${ourMoney} i need to repair my car with this price: ${price}`);
        console.info(`${this.carName}, Cost: ${total}`);
    }
}

function carDealer(list) {
    console.info(`Here are Car Dealer lists: ${list}`);
}

export {Car, carDealer};

// Alias: better using alias while importing the function or whatever things to export
class Car2 {
    constructor (carName) {
        this.carName = carName;
    }

    repairCar2(ourMoney, price) {
        let total = ourMoney - price;
        console.info(`I have money ${ourMoney} i need to repair my car with this price: ${price}`);
        console.info(`${this.carName}, Cost: ${total}`);
    }
}

function carDealer2(list) {
    console.info(`Here are Car Dealer lists: ${list}`);
}

export {Car2, carDealer2};
