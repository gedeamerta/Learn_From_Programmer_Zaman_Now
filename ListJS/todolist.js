const todoList = document.getElementById("todo");
const inputTodo = document.getElementById("add-todo");
const addItemBtn = document.getElementById("submit-btn");

addItemBtn.addEventListener("click", () => {
    let newTodo = inputTodo.value;
    let createAList = document.createElement("li");
    createAList.textContent = newTodo;
    todoList.appendChild(createAList);
    inputTodo.value = "";

    const deleteBtn = document.createElement("button");
    let setDeleteBtnAtt = deleteBtn.setAttribute("id", "delete-todo");
    
});



