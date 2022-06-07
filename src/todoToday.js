 var todoToday = {
     i:0,
    todos: function(title,description,dueDate,priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        switch(priority) {
            case 'priority1':
                this.priority = 'red'
                break;
            case 'priority2':
                this.priority = 'yellow';
                break;
            case 'priority3':
                this.priority = 'blue';
                break;
        }
    },
    todoList: [],
    addForm: function() {
        const gridContainer = document.querySelector('.gridContainer')
        const gridContainerNew = document.querySelector('.gridContainerNew')

        const formDiv = document.createElement('div')
        formDiv.setAttribute('class','form')
        formDiv.setAttribute('id','form')
        gridContainerNew.appendChild(formDiv);

        const form = document.createElement('form');
        form.setAttribute('action','#');
        form.setAttribute('id','formUp')
        formDiv.appendChild(form);

        const formTitleDiv = document.createElement('div');
        formTitleDiv.setAttribute('class','formTitleDiv');
        form.appendChild(formTitleDiv);

        const formDescriptionDiv = document.createElement('div');
        formDescriptionDiv.setAttribute('class','formDescriptionDiv');
        form.appendChild(formDescriptionDiv);

        const formDueDateDiv = document.createElement('div');
        formDueDateDiv.setAttribute('class','formDueDateDiv');
        form.appendChild(formDueDateDiv);

        const radioDiv = document.createElement('div');
        radioDiv.setAttribute('class','radioDiv');
        form.appendChild(radioDiv);

        const submitBtn = document.createElement('input')
        submitBtn.setAttribute('type','submit');
        submitBtn.setAttribute('value','Submit');
        form.appendChild(submitBtn);

        const labelTitle = document.createElement('label');
        labelTitle.setAttribute('for','title');
        labelTitle.innerHTML = 'Title:'

        const inputTitle = document.createElement('input');
        inputTitle.setAttribute('type','text')
        inputTitle.setAttribute('id','title')
        inputTitle.setAttribute('name','title')
        inputTitle.setAttribute('required','required')

        formTitleDiv.appendChild(labelTitle);
        formTitleDiv.appendChild(inputTitle);

        const labelDescription = document.createElement('label');
        labelDescription.setAttribute('for','description');
        labelDescription.innerHTML = 'Description:'

        const inputDescription = document.createElement('input');
        inputDescription.setAttribute('type','text')
        inputDescription.setAttribute('id','description')
        inputDescription.setAttribute('name','description')
        inputDescription.setAttribute('required','required')

        formDescriptionDiv.appendChild(labelDescription);
        formDescriptionDiv.appendChild(inputDescription);

        const labelDueDate = document.createElement('label');
        labelDueDate.setAttribute('for','dueDate');
        labelDueDate.innerHTML = 'DueDate:'

        const inputDueDate = document.createElement('input');
        inputDueDate.setAttribute('type','date')
        inputDueDate.setAttribute('id','dueDate')
        inputDueDate.setAttribute('name','dueDate')
        inputDueDate.setAttribute('required','required')

        formDueDateDiv.appendChild(labelDueDate);
        formDueDateDiv.appendChild(inputDueDate);

        const radioP = document.createElement('p');
        radioP.innerHTML = 'Importance:';
        radioDiv.appendChild(radioP);

        const inputPriority1 = document.createElement('input');
        inputPriority1.setAttribute('type','radio')
        inputPriority1.setAttribute('id','priority1')
        inputPriority1.setAttribute('name','priority')
        inputPriority1.setAttribute('value','priority1')
        inputPriority1.setAttribute('required','required')

        const labelPriority1 = document.createElement('label');
        labelPriority1.setAttribute('for','priority1');
        labelPriority1.innerHTML = 'P1'

        radioDiv.appendChild(inputPriority1);
        radioDiv.appendChild(labelPriority1);

        const inputPriority2 = document.createElement('input');
        inputPriority2.setAttribute('type','radio')
        inputPriority2.setAttribute('id','priority2')
        inputPriority2.setAttribute('name','priority')
        inputPriority2.setAttribute('value','priority2')

        const labelPriority2 = document.createElement('label');
        labelPriority2.setAttribute('for','priority2');
        labelPriority2.innerHTML = 'P2'

        radioDiv.appendChild(inputPriority2);
        radioDiv.appendChild(labelPriority2);

        const inputPriority3 = document.createElement('input');
        inputPriority3.setAttribute('type','radio')
        inputPriority3.setAttribute('id','priority3')
        inputPriority3.setAttribute('name','priority')
        inputPriority3.setAttribute('value','priority3')

        const labelPriority3 = document.createElement('label');
        labelPriority3.setAttribute('for','priority3');
        labelPriority3.innerHTML = 'P3'

        radioDiv.appendChild(inputPriority3);
        radioDiv.appendChild(labelPriority3);

        form.addEventListener('submit',(event => {
            event.preventDefault();
            const title = form.elements['title']
            const description = form.elements['description']
            const dueDate = form.elements['dueDate']
            const radio = form.elements['priority']
            this.addTodo(title.value,description.value,dueDate.value,radio.value)
            this.displayTodo();
            // console.log(title.value)
            // console.log(description.value)
            // console.log(dueDate.value)
            // console.log(radio.value)
            form.reset();
        }))


    },
    run: function() {
        const content = document.querySelector('.content')
        content.innerHTML = ''
        // const gridContainer = document.querySelector('.gridContainer')
        const gridContainerNew = document.createElement('div')
        const todoss = document.createElement('div')
        todoss.setAttribute('id','todoss')
        gridContainerNew.setAttribute('class','gridContainerNew')
        // const whatever = content.removeChild(gridContainer)
        content.appendChild(todoss)
        content.appendChild(gridContainerNew);

        const form = document.querySelector('#form')
        // gridContainer.innerHTML = ""
        gridContainerNew.innerHTML = ''

        this.addForm();

        const addBtn = document.createElement('button');
        addBtn.setAttribute('id','addTodo')
        addBtn.innerHTML = '+'
        addBtn.addEventListener('click', () => {
            if (document.getElementById("form").style.display === "block") {
                document.getElementById("form").style.display = "none";
            }
            else {
                document.getElementById("form").style.display = "block";
            }
            
        })

        gridContainerNew.appendChild(addBtn)

        this.displayTodo();
    },
    addTodo: function(title,description,dueDate,priority) {
        let newTodo = new this.todos(title,description,dueDate,priority)
        this.todoList.push(newTodo)
    },

    displayTodo: function() {
        const gridContainer = document.querySelector('.gridContainer')
        const gridContainerNew = document.querySelector('.gridContainerNew')
        const todoss = document.querySelector('#todoss')
        todoss.innerHTML = ""
        this.todoList.forEach(element => {
            let newDiv = document.createElement('div')
            newDiv.classList.add('divs')
            newDiv.setAttribute('id',`prio${this.i}`)
            newDiv.innerHTML = `${element.title} <em class="ems">${element.description}</em> ${element.dueDate}`
            if (element.priority === 'blue') {
                newDiv.style.backgroundColor = 'blue';
            }
            if (element.priority === 'yellow') {
                newDiv.style.backgroundColor = 'yellow';
                newDiv.style.color = 'black';
            }

            todoss.appendChild(newDiv)
            this.i++
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