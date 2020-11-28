var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];


//04-Stu_Render_Todos START

renderToDo()

function renderToDo (){
    for ( var i = 0; i < todos.length; i++){
        //create li element
        var li = document.createElement("li")
        //add todo text to li 
        li.innerText = todos[i]
        //append li to todoList
        todoList.appendChild(li)
    }
    todoCountSpan.innerText = todos.length
}

//04-Stu_Render_Todos END

//05-Stu_Add_Todos START

todoForm.addEventListener("submit", function(event){
    event.preventDefault()
    var todoText = todoInput.value.trim()
    if (todoText === ""){
        return;
    }
    todos.push(todoText)
    todoInput.value = ""
    todoList.innerHTML = ""
    renderToDo()
})

//05-Stu_Add_Todos END