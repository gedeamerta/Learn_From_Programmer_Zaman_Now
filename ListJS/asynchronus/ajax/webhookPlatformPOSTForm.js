// Now we use Pipedream as a webhook to catch an event using their url
function doLogin() {
  const ajax = new XMLHttpRequest();

  ajax.open("POST", "https://eoyytsw268aek0h.m.pipedream.net");
  ajax.onload = function () {
    const result = document.getElementById("result");
    result.innerText = ajax.responseText;
  };
  
  ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  const formParam = new URLSearchParams();
  formParam.append("username", document.getElementById("username").value);
  formParam.append("password", document.getElementById("password").value);
  ajax.send(formParam);
}
document.getElementById("login").onclick = doLogin;
