/*
DOM Tipe Data:

1. Document -> representasi halaman Web
2. Node -> base class untuk semua tipe data di DOM, such as Document, Element, and Attr
3. Element -> representasi object element di halaman web, such as head, body, form, etc
4. NodeList -> array/collection berisikan Node, anggap saja array of Node
5. Attr -> attribute representasi object attribute dalam element such as id, class
6. NamedNodeMapv -> collection yang berisikan Attr dalam bentuk Map

*/
console.info("----------------------- DOM --------------------------------")


// Node 
let fruits = document.getElementById("fruits");
console.info(fruits);
console.info(fruits.children);
console.info(fruits.lastChild);

// Element
let creds = document.getElementById("information");
const firstName = document.createElement("li");
const lastName = document.createElement("li");
firstName.textContent = "Gede"
lastName.textContent = "Amerta"
creds.appendChild(firstName);
creds.appendChild(lastName);

// Nodelist -> ada nodelist Static dan Live
// definisi Nodelist yg Static dan Live bisa dilihat dari query atau getelement nya. for more details go to Udemy 
let nameofInfoUser = document.querySelectorAll("li");
console.log(nameofInfoUser);

let childName = document.getElementById("info-user").childNodes;
console.log(childName);

// Attr
let getPId = document.getElementById("add-attribute");
let setAttribute = getPId.setAttribute("class", "this-is-new-attribute");

// NameNodeMap -> kumpulan dari attribute
let getAttributeNode = getPId.attributes;
for (const attribute of getAttributeNode) {
    console.log(`${attribute.name}: ${attribute.value}`)
}


// Event Handler

// Event Target
// let clickID = document.getElementById("event-handler-id");
// clickID.addEventListener("click", function(){
//     clickID.setAttribute("value", "you are already click me");
// })

// Global Event
let clickID = document.getElementById("event-handler-id");
clickID.onclick = function() {
    console.log("you click the button")
}
// Bedanya Event Target & Global Event adalah penggunaannya, EVent Target bisa beberapa menambahkan beberapa kali callback. kalau pake GLobal Event hanya bisa sekali callback