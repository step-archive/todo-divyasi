const showListOfAllTodos = (userData)=> {
  let userTodoList = userData.allTodos;
  return userTodoList.map(todo=>{
    let title = todo.title;
    let id = todo.id;
    return `<a href='/todo/view/${id}'>${title}</a> <a href='/todo/delete/${id}'> delete</a>`
  }).join('<br>')
};

const getTodoItemsInHtml = function(todoItems, todoId) {
  return todoItems.map(item=>{
    let deleteOption=`<span><a href="/todo/delete/${todoId}/${item.id}">Delete</a></span>`;
    let itemObjective=`<span>${item.objective}</span>`;
    let checkBox=`<span><input type="checkbox" id=item${item.id} onclick=requestMarkAs(event) CHECKED></span>`;

    if (!item.status) {
      checkBox=checkBox.replace("CHECKED",'');
    }

    let itemDetails=checkBox+itemObjective+deleteOption;
    return `<span>${itemDetails}</span>`;
  }).join('<br>');
};

const viewTodo = function(template, userData,todoId) {
  let todo = userData.allTodos.find(t=>t.id == todoId);
  let todoItems = getTodoItemsInHtml(todo.allItems, todo.id);
  let todoInHtmlForm = `<div id=${todo.id} class=todo><p>Title:${todo.title}</p><br><p>Description:${todo.description}</p><br>Todo Items:<br><div class=todoItems>${todoItems}</div></div>`;
  let html = template.replace(`TODO_DETAILS`, todoInHtmlForm);
  return html;
};

exports.showListOfAllTodos = showListOfAllTodos;
exports.viewTodo = viewTodo;
exports.getTodoItemsInHtml = getTodoItemsInHtml;
