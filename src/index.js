import { todoToday } from "./todoToday";


const todayLi = document.querySelector('#todayLi')

todayLi.addEventListener('click',() => {
    todoToday.run();
    // todoToday.displayTodo();
})

// todoToday.addTodo('fad','fadfa','fadaf','priority3')

console.log(todoToday.todoList)
// todoToday.displayTodo()
