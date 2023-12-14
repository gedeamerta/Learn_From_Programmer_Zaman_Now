// Train Fetch Request

function pushData(){
    const request = new Request("https://eoyytsw268aek0h.m.pipedream.net", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: document.getElementById("username").value,
            password: document.getElementById("password").value,
        })
    });

    const response = fetch(request);

    response
    .then((response) => response.json())
    .then(function(json){
        document.getElementById("result").textContent = json.about;
    })
    .catch(function(error){
        document.getElementById("result").textContent = `Error`;
    })
}

document.getElementById("btn-submit").onclick = pushData;