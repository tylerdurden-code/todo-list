 var todoToday = {
    todos: function(title,description,dueDate,priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    },
    todoList: [],
    addForm: function() {
        const gridContainer = document.querySelector('.gridContainer')

        const formDiv = document.createElement('div')
        formDiv.setAttribute('class','form')
        formDiv.setAttribute('id','form')
        gridContainer.appendChild(formDiv);

        const form = document.createElement('form');
        form.setAttribute('action','#');
        form.setAttribute('id','formUp')
        formDiv.appendChild(form);

        const formTitleDiv = document.createElement('div');
        formTitleDiv.setAttribute('class','formTitleDiv')
    },
    run: function() {
        const content = document.querySelector('.content')
        const gridContainer = document.querySelector('.gridContainer')
        const form = document.getElementById('form')
        gridContainer.innerHTML = ""

        const addBtn = document.createElement('button');
        addBtn.setAttribute('id','addTodo')
        addBtn.innerHTML = '+'
        addBtn.addEventListener('click', () => {
            form.style.display = 'block';
        })

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