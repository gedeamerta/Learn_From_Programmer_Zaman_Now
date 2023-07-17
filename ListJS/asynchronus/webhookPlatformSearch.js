// Now we use Pipedream as a webhook to catch an event using their url
// URL Parameter using URLSearchParams() class;

function doSearch() {
  const ajax = new XMLHttpRequest();

  const param = new URLSearchParams();
  param.append("search", document.getElementById('search').value);
  param.append("filter", document.getElementById('search').value);

  ajax.open("GET", `https://eoyytsw268aek0h.m.pipedream.net?${param.toString()}`);
  ajax.onload = function () {
    const result = document.getElementById("result");
    result.innerText = ajax.responseText;
  };
  ajax.send();
}
document.getElementById("searchBtn").onclick = doSearch;
