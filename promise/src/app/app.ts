import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  newTodo = '';
  todos: string[] = [];

  addTodo() { if (this.newTodo.trim()) this.todos.push(this.newTodo.trim()); this.newTodo = ''; }

  removeTodo(todo: string) { this.todos = this.todos.filter(item => item !== todo); }
}
