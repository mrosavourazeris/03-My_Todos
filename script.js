var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

//07
var todos = JSON.parse(localStorage.getItem("todos"))


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

//05-Stu_Add_Todos START & 07-Stu_Local_Storage_Todos START

//05
todoForm.addEventListener("submit", function(event){
    //05
    event.preventDefault()
    //05
    var todoText = todoInput.value.trim()
    //05
    if (todoText === ""){
        //05
        return;
    }
    //05
    todos.push(todoText)
    //05
    todoInput.value = ""
    //07
    localStorage.setItem("todos", JSON.stringify(todos))
    //05
    renderToDo()
})

//05-Stu_Add_Todos END

// 06-Stu_Complete_Todos START

//06
todoList.addEventListener("click", function(event){
    //06
    var element = event.target
    //06    
    if(element.matches("button")){
        //06
        var index = element.parentElement.getAttribute("data-index")
        //06
        todos.splice(index, 1)
    }
    //06
    renderToDo()
    //07
    localStorage.setItem("todos", JSON.stringify(todos))
})

//06-Stu_Complete_Todos END & 07-Stu_Local_Storage_Todos END