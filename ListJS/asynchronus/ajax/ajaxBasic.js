// Ajax: Asynchronus Javascript and XML 
const ajax = new XMLHttpRequest();
ajax.open("GET","api/response.json");
ajax.addEventListener("load", function() {
    const json = JSON.parse(ajax.responseText);

    const word = document.getElementById("text-json");
    word.textContent = json.response;
});
ajax.send();
