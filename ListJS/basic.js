// Nullish Coalesting Operator => `??` merupakan operator yang digunakan untuk mengecek apakah value dalam sebuah variabel tsb undefined / null, jika iya maka akan mereturn true dan kita bisa membuat default value nya.
let arr;
let data = arr ?? "defaut value";
console.info(data);

// Optional Chaining => `?` mengecek pada setiap value apakah bernilai null atau tidak, jika tidak maka akan dilanjutkan hingga menemukan value yang dituju. Jika null maka akan mereturn null / undefined
let person1 = {}
let dataPerson1 = person1?.country?.address; // undefined
console.info(dataPerson1);

let person2 = {
    country: {
        address: "indonesia"
    }
}
let dataPerson2 = person2?.country?.address;
console.info(person2?.country?.address); // Indonesia

// Falsey and Truthy
// Javascript memiliki hal unique dalam tipe data yang menentukan false dan truthy
/*
List Tipe Falsey:
1. null -> false
2. undefined -> false
3. NaN -> false
4. false -> false 
5. 0, -0 -> false
6. "", ``, '' -> false

List Tipe Truthy: simple logika nya tinggal melihat apa aja list yg falsey
1. null, undefined, NaN: jika sudah berisi tipe data apapun itu asal bukan string kosong, bukan number 0, -0 boolean true maka hasilnya akan true
2. true -> true
3. number > 0 -> true
4. string yang tidak kosong -> true 
*/

let stringNull = ``;
console.info(stringNull !== `` ? true : false); // false

let stringTrue = `false`;
console.info(stringTrue !== `` ? true : false); // true

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

// Rest Parameter
/*
Rest Parameter digunakan untuk menyimpan data yang lebih dari 1, atau parameter yg memiliki value lebih dari 1. 

Kita menggunakan ...data -> otomatis membuat parameter tersebut menjadi tipe data array.

*/
function calculate(name, ...data) {
    let total = 0;
    for (const item of data) {
        total += item
    }
    console.info(`${name}: ${total}`);
}
calculate("gede", 10,20,30,40,50); // gede: 150

// Spread Syntax
/*
Menggunakan Spread Syntax itu disaat kita membuat variable baru berisikan array ataupun string, seharusnya ini bisa dimasukan dalam kategori menggunakan tipe data yg iterable

*/

let spreadSyn = [10,10,10,10,10];
calculate("Banana", ...spreadSyn); // Banana: 50

// Anonymous Function di dalam variable

let callMyName = function (name) {
    document.writeln(`<p>Hello ${name}</p>`)
}
callMyName("Gede Amerta"); // Hi Gede Amerta

// Anonymous Function pada parameter

function giveMyName(callback) {
    callback("Antonio - Callback");
}

giveMyName(callMyName);

giveMyName(function (name){
    document.writeln(`<p>Hi ${name}</p>`);
});

// Function dalam Function, function yg berada di dalam sebuah function tidak akan terdefined jika ingin melihat result nya diluar dari function tsb. Contoh: function inner() tidak akan dapatkan resultnya jika kita memanggil function tsb diluar dari function outer()
function outer() {
    console.log("Outer Function");
    function inner() {
        console.log("Inner Function");
    }
    inner(); // Inner Function
}

outer(); // Outer Function


// Scope: Disini akan membagikan atau mengenali mana yg global scope, mana yg local scope

// Global Scope
let counter = 0;

// Global Scope
function hitMe() {
    // Local Scope getName
    counter++;
}

// Global Scope
function other() {
    // Local Scope other
}

// Recursive Function: kemampuan function memanggil dirinya sendiri

// Factorial Loop
function factorialLoop(value) {
    result = 1;
    for (let i = 1; i<=value; i++) {
        result *= i;
    }
    return result;
}

console.info(`Factorial Loop: ${factorialLoop(5)}`);

// Factorial Recursive
function factorialRecursive(value) {
    if(value === 1) {
        return 1;
    } else {
        return value * factorialRecursive(value - 1);
    }
}
console.info(`Factorial Recursive: ${factorialRecursive(5)}`);

// Function Generator: function yg digunakan untuk membuat data generator, Generator: data yang bisa di iterate seperti Array. Mengembalikan data di tiap iterasi dengan menggunakan Yield. Dan kalo diperhatikanb lagi si Function Generator ini berupa object

// Function Generator ini sifatnya Lazy. Jadi akan di eksekusi jika dibutuhkan. 

// Note: untuk memanggil function generator itu harus menggunakan loop dan juga ada function tersendiri untuk Generator contohnya yaitu next()

function* createName(){
    yield "Gede";
    yield "Surya";
    yield "Amerta";
}
const namesGenerator = createName();
for (const name of namesGenerator) {
    console.info(`Name: ${name}`);
}

// Lazy
function* createOdd(num) {
    for (let i = 1; i <= num; i++) {
        if(i % 2 === 1) {
            yield i;
        }
    }
}

// Eager
function createOddArray(num) {
    result = [];
    for (let i = 1; i <= num; i++) {
        if(i % 2 === 1) {
            console.info(`Yield: ${i}`);
            result.push(i);
        }
    }
    return result;
}

// Call the Function Generator by Loop
const numbers = createOdd(10);
// for (const number of numbers) {
//     console.info(`Odd Number: ${number}`);
// }

// Call the Function Generator one by one
console.info("Odd Number: " + numbers.next().value);
console.info("Odd Number: " + numbers.next().value);
console.info("Odd Number: " + numbers.next().value);

// Arrow Function

const sayHore = (shout) => {
    console.info(`Shout: ${shout}!!!!`);
}
sayHore("ANJIENGG");

// Jika Arrow Function yg dibuat tidak terlalu panjang kita bisa membuat function tanpa block '{}'
const sayHore2 = (shout) => console.info(`Shout: ${shout}`)
sayHore("KONTOLLLL");

// Arrow Function langsung return value
const sum = (first, second) => first + second;
console.info(`Sum: ${sum(1, 2)}`);

// Arrow Function parameter hanya satu
const sayHore3 = shout => console.info(`Shout: ${shout}`);
sayHore3("BADJINGAN!!!")

// Closure: kombinasi function dan bundel referensi ke data sekitarnya. Dengan kemampuan Closure, kita dapat membuat sebuah local scope dan referensi ke data sekitar local scope, menjadi keluar scope nya

const createAdder = value => {
    let name = "Gede Amerta";
    function add(param) {
        console.info(name);
        return value + param;
    }
    return add;
}

const addTwo = createAdder(5);
/*
    function add(param) {
        console.info("Gede Amerta");
        return 5 + param;
    }
*/
console.info(`Create Adder: ${addTwo(10)}`);


// Object Method: membuat function di dalam Object

const personObjMethod = {
    dataName: "Gede",
    shoutHello: function sayHello(dataName) {
        console.info(`Shout Obj Method: ${dataName} ANJENGGG !!!`);
    }
}
personObjMethod.shoutHello(personObjMethod.dataName);

// Membuat object nya terlebih dahulu, baru membuat function
const personObjMethod2 = {
    dataName: "Gede Ganteng"
}

personObjMethod2.shoutHello = (param) => {
    console.info(`Shout Obj Method 2: ${param} ANJENGG!!!`);
}

personObjMethod2.shoutHello(personObjMethod2.dataName);