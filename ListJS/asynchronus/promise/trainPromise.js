function getDataTrainPromise(){
    return new Promise(function(resolve, reject) {
     const ajax = new XMLHttpRequest();
     ajax.open("GET", "./dataTrain.json");
     ajax.onload = function () {
        if(ajax.status == 200) {
            resolve(ajax.responseText);
        } else {
            reject(`Error request: ${ajax.status}`);
        }
     };
     ajax.send()
    })
}
getDataTrainPromise()
.then(function (response){
    const json = JSON.parse(response);
    const dataArr = json.data;
    let container = document.getElementById("data-container");
    for (const data of dataArr) {
        let idText = document.createElement("h2");
        idText.textContent = `ID: ${data.id}`
        container.appendChild(idText);

        let nameText = document.createElement("h2");
        nameText.textContent = `Name: ${data.name}`;
        container.appendChild(nameText);
    }
}).catch((error) => {
    console.log(`Error: ${error}`)
})