import { todoToday } from "./todoToday";


const todayLi = document.querySelector('#todayLi')

todayLi.addEventListener('click',() => {
    todoToday.run() 
})
