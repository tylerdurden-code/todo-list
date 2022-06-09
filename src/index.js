import { todoToday } from "./todoToday";


const todayLi = document.querySelector('#todayLi')

todayLi.addEventListener('click',() => {
    todoToday.run();
    // todoToday.displayTodo();
})

todoToday.addTodo('Title','Description','15-09-1997','priority3')



console.log(todoToday.todoList)
// todoToday.displayTodo()
