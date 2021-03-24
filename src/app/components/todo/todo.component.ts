import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todo = {
    id : "0",
    name: "",
    descripcion: "",
  };

  @Output() elimina: EventEmitter<string> = new EventEmitter<string>();

  estaEliminado : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  borrar(){
    this.elimina.emit(this.todo.id)
    this.estaEliminado = !this.estaEliminado
  }

}
