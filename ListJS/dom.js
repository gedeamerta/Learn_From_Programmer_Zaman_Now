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

/*

In general function Event Handler:
- EventTarget.addEventListener() -> meregistrasikan suatu event dari event target
- EventTarget.removeEventListener() -> menghapus event listener dari event target
- EventTarget.dispatchEvent() -> mengirimkan sebuah event ke dalam event target

*/

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

// Event Target
let buttonClicked = document.getElementById("event-handler-id");
buttonClicked.addEventListener("click", function() {
    buttonClicked.setAttribute("value", "It's clicked")
})
// Bedanya Event Target & Global Event adalah penggunaannya, Event Listener bisa ditambah beberapaka kali sedangkan Global Event hanya bisa satu kali pada Event Target.


/*
Event --> memiliki banyak event tergantung pada target yang dituju
*/

const textCanvas = document.getElementById("text-canvas");
const canvas = document.getElementById("canvas");
canvas.addEventListener("mousemove", function(event) {
    textCanvas.textContent = `Your mouse/cursor position X:${event.x} , Y:${event.y} `
})

const canvasColor = document.getElementById("canvas-change-color");
const allBtnInputColor = document.querySelectorAll("input");
for (let btnColor of allBtnInputColor) {
    btnColor.onclick = function() {
        console.log(btnColor.getAttribute("value"));
        canvasColor.style.backgroundColor = btnColor.getAttribute("value");
    }   
}

/*
Inner Text, Text Content, innerHTML

Perbedaan nya disini adalah Text Content akan mengambil semua text yang berada pada suatu elemen, tanpa peduli didalamnya apakah text atau bukan. Lalu innerText akan lebih pintar, jadi dia mengetahui elemen mana yang merupakan benar-benar text yg diperlukan.

innerHTML berfungsi ketika kita membuat text dengan tag html, maka browser akan membaca segala jenis html tag seperti membuat html di extension fie HTML.
*/

const containerContentText = document.getElementById("content-for-text-and-inner-text");
containerContentText.innerHTML = `<h1><i>This</i> text is created from innert html tag</h1>`
console.info(containerContentText.textContent);
console.info(containerContentText.innerText);
console.info(containerContentText.innerHTML);


/*

Window => representasi window yang berisikan DOM Element. Contoh: alert(), confirm(), prompt()

*/

const contentWindow = document.getElementById("contentWindow");
const locationUrl = document.getElementById("locationUrl");

const width = window.screen.width;
const height = window.screen.height;
const url = window.location;


contentWindow.textContent = `Total Width ${width}, Total Height ${height}`;
locationUrl.textContent = url;

/*

"Query Selector and Query Selector All"
Query Selector: mengambil element yang ditarget dan yang pertama.
Query Selector All: mengambil keseluruhan element yang mengandung id atau class yang sama.

*/

const getUlContent = document.getElementById("lists-content");
const getLiContent = getUlContent.querySelectorAll('li');

getLiContent.forEach(element => {
    console.info(`Element: ${element.textContent}`);
});



