 var todoToday = {
    


    run: function() {
        const content = document.querySelector('.content')
        content.innerHTML = ""

        const addBtn = document.createElement('button');
        addBtn.setAttribute('id','addTodo')
        addBtn.innerHTML = '+'

        content.appendChild(addBtn)
    }
}


// function todoToday() {

//     const content = document.querySelector('.content')
//     content.innerHTML = ""

//     const addBtn = document.createElement('button');
//     addBtn.setAttribute('id','addTodo')
//     addBtn.innerHTML = '+'
    
//     content.appendChild(addBtn)


// }

export {todoToday}