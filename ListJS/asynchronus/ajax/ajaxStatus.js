// Ajax: Check status of XMLHttpRequest.

const ajax = new XMLHttpRequest();

function displayResponse(json) {
    let word = document.getElementById("text-json");
    return word.textContent = json.response;
}

ajax.onreadystatechange = function() {
    console.log(`Ready State Change ${ajax.readyState}`);
}
ajax.open("GET","api/response.json");
ajax.addEventListener("load", function() {
    if(ajax.status == 200) {
        const json = JSON.parse(ajax.responseText);
        displayResponse(json);
    } else {
        displayResponse({
            response: `Response not found ${ajax.status}` 
        })
    }

});
ajax.send();
