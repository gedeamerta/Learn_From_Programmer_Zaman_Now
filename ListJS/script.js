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