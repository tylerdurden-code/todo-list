 var todoToday = {
    todos: function(title,description,dueDate,priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    },
    todoList: [],

    run: function() {
        const content = document.querySelector('.content')
        const gridContainer = document.querySelector('.gridContainer')
        gridContainer.innerHTML = ""

        const addBtn = document.createElement('button');
        addBtn.setAttribute('id','addTodo')
        addBtn.innerHTML = '+'

        gridContainer.appendChild(addBtn)
    },
    addTodo: function(title,description,dueDate,priority) {
        let newTodo = new this.todos(title,description,dueDate,priority)
        this.todoList.push(newTodo)
    },

    displayTodo: function() {
        const gridContainer = document.querySelector('.gridContainer')
        this.todoList.forEach(element => {
            let newDiv = document.createElement('div')
            newDiv.classList.add('divs')
            newDiv.innerHTML = `${element.title} ${element.description} ${element.dueDate} ${element.priority} `

            gridContainer.appendChild(newDiv)
        });
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