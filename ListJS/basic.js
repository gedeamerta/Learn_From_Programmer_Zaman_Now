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
personObjMethod2.shoutHello(personObjMethod2.dataName)

// This: definition
/*

"This" => Merujuk pada ke siapa milik object tsb. 

Tiap lokasi this, bisa berbeda-beda referensi pemiliknya

*/

const person3 = {
    firstname: "Gede",
    shout : function sayHello(fullname) {
        console.info(`Hi, my name is ${fullname} and you can call me ${this.firstname}`);
    }
}

/*

const person3 = {
    firstname: "Gede",
    shout : function sayHello(fullname) {
        console.info(this);
    }
}

Output: {firstname: "Gede", shout: function sayHello(fullname)...}

so that's why you can get the firstname using "this", cause in this function when you define in it like above, it will take all of your person3 object

*/

person3.shout("Gede Amerta");

console.info(this); // Window()

// all inside the function will return Window();
function outer2() {
    console.info(this);

    function inner() {
        console.info(this);
    }
    inner();
}

outer2();

// Arrow Function di Object 
// Note: tidak bisa mengakses Argument Object, Function Generator, kata kunci "this" dan kata kunci "super"

const person4 = {
    shout : sayHello = (fullname, firstname) => {
        console.info(`----Arrow Function Section----`);
        console.info(`Hi, my name is ${fullname} and you can call me ${firstname}`);
    }
}

person4.shout("Gede Amerta", "Gede");

// Getter & Setter
// Kemampuan membuat function berbeda untuk mengambil data (Getter) dan mengubah data (Setter) pada sebuah property di Object

// Getter
const person5 = {
    firstname : "Gede",
    lastname : "Amerta",
    // jika sudah menggunakan getter, maka kita tidak perlu menambahkan property baru pada object dan berisikan function seperti membuat Function di dalam Object
    get sayHello() {
        console.info(`-------------- GETTER AND SETTER -------------`);
        return `Hi, my name is ${this.firstname}, and my fullname is ${this.firstname} ${this.lastname} `;
    } 
}

person5.sayHello;

// Setter 
const person6 = {
    firstname : "",
    lastname : "",
    get fullName() {
        return `${this.firstname} ${this.lastname}`;
    },
    set fullName(value) {
        const arr = value.split(" ");
        this.firstname = arr[0];
        this.lastname = arr[1];
    }
}

let setter1 = person6.fullName = "Surya Amerta";
console.table(setter1);
let setter2 = person6.fullName = "Antonio Komang";
console.table(setter2);


// Destructuring: fitur yang bisa digunakan untuk membongkar value-value di array atau object ke dalam variable-variable

// Destructuring Array
console.info("------------- Destructuring ----------------")
{
    
const nameArr = ["Gede", "Surya", "Amerta", "Antonio", "Komang"];

let [firstname, middlename, lastname, ...others] = nameArr;

console.info(firstname);
console.info(middlename);
console.info(lastname);
console.info(others);
}

// Destructuring Object
{
    const nameObj = {
        objFirstname: "Gede",
        objLastname: "Amerta",
        address: {
            state: "Sydney",
            country: "Australia"
        }
    };
    let {objFirstname, objLastname, address: {state, country}} = nameObj;
    console.info(objFirstname);
    console.info(objLastname);
    console.info(state);
    console.info(country);
}

// Destructuring Function with Object
{
    function displayPerson({firstname, lastname, address}) {
        console.info(`Hi my name is ${firstname} ${lastname} I live in` + address);
    }
    
    const person7 = {
        firstname: "Gede",
        lastname: "Amerta",
        address: "Bali",
    }
    
    displayPerson(person7)
}

// Destructuring Function with Array
{
    function sumArr([first, second]) {
        return first + second;
    }

    console.info(sumArr(([20, 40])));
}

// Destructuring with default Value in Array
{
    let defArr = ["Diva"];
    let [firstname = "Gede", lastname = "AmertaDef", ...others] = defArr;
    console.log(firstname);
    console.log(lastname);
    // console.log(others);
}

// Destructuring with default Value in Object
{
    // I DONT KNOW WHY THIS HAS AN ISSUE
    // const nameObj = {
    //     objFirstname,
    //     objMiddlename,
    //     objLastname: "Amerta",
    // };
    // let {objFirstname, objMiddlename = "Surya", objLastname} = nameObj;
    // console.info(objFirstname);
    // console.info(objMiddlename);
    // console.info(objLastname);
}

// Destructuring Object dengan menambahkan variable
{
    // in this code still has an issue while give default value. I dont know, I think for now JS in Object type data we can't put the default value while Destructuring
    const nameObj = {
        objFirstname: "Gede First Variable",
        objMiddlename: "Gede Middle Variable",
        objLastname: ""
    };
    let {objFirstname: nameFirst, objMiddlename: nameMiddle, objLastname: nameLast = "LAST!!!"} = nameObj;
    console.info(nameFirst);
    console.info(nameMiddle);
    console.info(nameLast);
}


// Strict Mode: Berfungsi untuk mendeteksi apakah di code yg kita buat mengandung code yg tidak lagi relevan untuk digunakan. Dan masih banyak cara untuk menggunakan fungsi strict ini salah satunya dalam membuat Class. Bisa liat di MDN Web Docs untuk dokumentasinya. 
{
    function useStrictMode() {
        "use strict";
        const person = {
            name: "SURYA AMERTA"
        }

        // Error karena function with tidak di rekomendasikan JS
        // with (person) {
        //     console.info(person.name);
        // }
    }

    useStrictMode();
}

// Debugger
{
    function getFullName(firstname, middlename, lastname) {
        // debugger;
        // dia bakal punya breakpoint yang dimana kalian bisa cek satu satu per setiap code yg akan di run. dan cek value nya. Disini sudah jelas yg salah adalah lastname nya ditaruh 2x
        const fullname = `${firstname} ${lastname} ${lastname}`
        return fullname;
    }

    console.info(getFullName("Gede","Surya", "Amerta"));
}