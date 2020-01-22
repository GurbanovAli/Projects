import { Component } from '@angular/core';
// import { AngularFireDatebase, AngularFireList } from 'angularfiredatebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'My Todo List';
  todolist = [
    {
      tasks: 'name',
      done: false,
      priority: 1
    },
  ];

  addTodo(newTodoTasks) {
    const newTodo = {
      tasks : newTodoTasks,
      priority: 1,
      done: false
    };
    this.todolist.push(newTodo);
  }

  deleteTodo(todo) {
    this.todolist = this.todolist.filter(t => t.tasks !== todo.tasks);
  }

}
