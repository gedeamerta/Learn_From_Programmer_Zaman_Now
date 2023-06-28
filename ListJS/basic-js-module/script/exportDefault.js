// Export Default: Tidak rekomen kalo bakal buat function tanpa nama
// Tidak boleh menggunakan export default lebih dari 1

// Export Default Function
// export default function(name) {
//     console.info(`Hi, my name is ${name}`);
// }

// Export Default Class
// export default class {
//     constructor(name) {
//         this.name = name;
//     }

//     sayHello() {
//         console.info(`Hi this is class and my name is ${this.name}`)
//     }
// }

// Export Default and Named 
const firstname = "Gede";
const title = "Learned JS";
const learnedProgram = "Learned JS with Programmer Zaman Now"

export {firstname, title};
export default learnedProgram;