/*

Fetch: Fetch API sudah menggunakan Promise
Alternative dari XMLHttpRequest()

Saat mengirim request kita perlu menggunakan object Request

const ... = new Request(input, {})
input => berupa URL request nya

*/

function doLogin() {
  const request = new Request("https://eoyytsw268aek0h.m.pipedream.net", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
    }),
  });

  // Promise<response>
  const response = fetch(request);

  response
  .then((response) => response.json())
  .then(function(json){
    document.getElementById("result").textContent = json.about
  }) 
  .catch(function(error) {
    document.getElementById("result").textContent = "error"
  })
}

document.getElementById("login").onclick = doLogin;
