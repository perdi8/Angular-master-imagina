
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-adios',
  templateUrl: './adios.component.html',
  styleUrls: ['./adios.component.scss']
})
export class AdiosComponent implements OnInit {

  nombre="";

  message: string = "Hasta luego!"

  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  // sendMessage() {
  //   this.messageEvent.emit(this.message)
  // }

  handleConsoleLog(){
    this.nombre = "Miguel"
    this.messageEvent.emit(this.message)
    console.log(`Hasta Luego ${this.nombre} !!!`)
  }

}
