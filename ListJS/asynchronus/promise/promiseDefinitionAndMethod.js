/*
Promise: merupakan proxy untuk sebuah nilai masa depan (Future) yang belum diketahui saat pembuatan Promise tsb

Promise: digunakan untuk proxy Async 

Promise ada 3 State:
1. Pending
2. Fulfiled
3. Rejected


Promise Method ada 3:
1. then -> mengambil data apabila success
2. catch -> akan mengambil error
3. finally -> tidak peduli apakah dia error atau success

*/
function getProduct() {
  return new Promise(function (resolve, reject) {
    const ajax = new XMLHttpRequest();
    ajax.open("GET", "./dataProduct.json");
    ajax.onload = function () {
      if (ajax.status == 200) {
        resolve(ajax.responseText);
      } else {
        reject(`Error to get Data: ${ajax.status}`);
      }
    };
    ajax.send();
  });
}

getProduct()
  .then(function (response) {
    const json = JSON.parse(response)
    document.getElementById("id").textContent = json.id;
    document.getElementById("name").textContent = json.name;
    document.getElementById("price").textContent = json.price;
  })
  .catch(function (error) {
    document.getElementById("id").textContent = error;
    document.getElementById("name").textContent = error;
    document.getElementById("price").textContent = error;
  })
  .finally(function() {
    console.info("finally success");
  })
