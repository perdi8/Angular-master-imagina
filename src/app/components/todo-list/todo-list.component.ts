import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  tarea1 = {
    id : "1",
    name: "Miguel",
    descripcion: "Descripcion 1",
  }

  tarea2 = {
    id : "2",
    name: "Manuel",
    descripcion: "Descripcion 2",
  }

  constructor() { }

  ngOnInit(): void {
  }


  borrarTarea(id: string){
     console.log("Borrar id " , id)
  }

}
