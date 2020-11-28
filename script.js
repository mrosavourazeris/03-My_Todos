var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];


//04-Stu_Render_Todos START & 06-Stu_Complete_Todos START

//04
renderToDo()

//04
function renderToDo (){
    //04
    todoList.innerHTML = ""
    //04
    for ( var i = 0; i < todos.length; i++){
        //04 create li element
        var li = document.createElement("li")
        //04 add todo text to li 
        li.innerText = todos[i]
        //06 create a new attribute on the li variable
        li.setAttribute("data-index", i)
        //06 create complete button for each li list item
        var button = document.createElement("button")
        //06 set the inner text of the button to be "Complete"
        button.textContent = "Complete"
        //04 append li to todoList
        todoList.appendChild(li)
        //06 append the button to the list
        li.appendChild(button)
    }
    //04
    todoCountSpan.innerText = todos.length
}

//04-Stu_Render_Todos END & 06-Stu_Complete_Todos END  

//05-Stu_Add_Todos START

todoForm.addEventListener("submit", function(event){
    event.preventDefault()
    var todoText = todoInput.value.trim()
    if (todoText === ""){
        return;
    }
    todos.push(todoText)
    todoInput.value = ""

    renderToDo()
})

//05-Stu_Add_Todos END

// 06-Stu_Complete_Todos START

todoList.addEventListener("click", function(event){
    var element = event.target

    if(element.matches("button") === true){
        var index = element.parentElement.getAttribute("data-index")
        todos.splice(index, 1)
    }
    renderToDo()
})

//06-Stu_Complete_Todos END  