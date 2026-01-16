function new_todo(){
    let todos=document.getElementById("todos");
    let li = document.createElement("li");
    li.textContent = "Yet another todo";
    todos.appendChild(li);
}
