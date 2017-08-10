function TodoController() {
	// new up the TodoService that has already been configured for your use
	// There are two methods getTodos returns and array
	// saveTodos accepts an array and stores it to your local storage
	var todoService = new TodoService()
	this.addTodoFromForm = function (e) {
		e.preventDefault()
		var todo = e.target.todo.value;




		// TAKE THE INFORMATION FORM THE FORM

		//ADD IT TO THE ARRAY BELOW
		var todosArry = todoService.getTodos()
		todosArry.unshift(todo)

		console.log(todosArry)

		// FINAL ACTION OF ADDING A TODO
		todoService.saveTodos(todosArry)
		draw(todosArry)
		document.getElementById('todo-box').value = ''
	}

	function draw(todoList) {
		var elem = document.getElementById('todo')
		var template = '<ul>'
		for (i = 0; i < todoList.length; i++) {
			template += `
		
			<li>${todoList[i]}  <button class="remove btn-xs" id="${i}"><span class="glyphicon glyphicon-ok-sign"></span></button></li>
		
		`
		}
		template += `</ul>`
		elem.innerHTML = template
		var buttons = document.getElementsByClassName('remove')
		for (var i = 0; i < buttons.length; i++) {
			buttons[i].addEventListener('click', remove)
		}
	}
	function remove() {
		
		var id = this.getAttribute('id');
		console.log(this)
		var todos = todoService.getTodos();
		todos.splice(id, 1);
		todoService.saveTodos(todos);
		draw(todoService.getTodos())
		return false;
		
			}

}
