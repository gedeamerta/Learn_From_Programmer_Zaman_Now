/*
Promise Static Method: 
1. Promise.all() -> mengeksekusi beberapa promise sekaligus dan menunggu semua hasil promisenya
2. Promise.any() -> mengambil hasil tercepat dan dengan syarat data tersebut state nya fulfilled
3. Promise.race() -> mengambil hasil tercepat walau state nya error dia akan mengambil yg error

*/
function getProduct(products) {
  return new Promise(function (resolve, reject) {
    const ajax = new XMLHttpRequest();
    ajax.open("GET", `./${products}.json`);
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

const promiseAll = Promise.any([
  getProduct("product1"),
  getProduct("product2"),
  getProduct("product3")
]);

promiseAll.then(function(products) {
  console.info(products);
  // const json = JSON.parse(products)
  // document.getElementById("id").textContent = json.id;
  // document.getElementById("name").textContent = json.name;
  // document.getElementById("price").textContent = json.price;
})