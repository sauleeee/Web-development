import { Component, OnInit } from '@angular/core';
import {Todo} from './../../models/Todo';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];
  inputToDo:string;
  title = 'title';
  constructor() { }
  
  ngOnInit(): void {
    this.todos = [
      {
        content:'first task',
        completed: false},
      {
        content: 'second task',
        completed: true
      }
    ]
  }

  toggleDone(id: number){
    this.todos.map(v,i)=> {
      if(i === id) v.completed = !v.completef;
      return v;
    }
  }

  deleteToDo (id: number) {
    this.todos = this.todos.filter((todo,i) => i!==id);
  }

  addTodo(){
    this.todos.push(
      Content: this.inputToDo,
      completed: false
    )
  }
}
