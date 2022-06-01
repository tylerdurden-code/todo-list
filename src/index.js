import { todoToday } from "./todoToday";


const todayLi = document.querySelector('#todayLi')

todayLi.addEventListener('click',() => {
    todoToday.run();
    // todoToday.displayTodo();
})

// todoToday.addTodo('fad','fadfa','fadaf','fadf')

console.log(todoToday.todoList)
// todoToday.displayTodo()
