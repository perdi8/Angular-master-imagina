import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})
export class SaludoComponent implements OnInit {

  @Input() nombre = "Nombre por defecto"
  @Input() apellido = "Apellido por defecto"

  message = "Hola!";
  estadoActual = "";

  constructor() { }

  ngOnInit(): void {
    // setTimeout(() => {
      // this.nombre = "Miguel"
    // }, 2000);
  }


  receiveMessage($event:string) {
    this.message = $event
  }


  cambiarNombre(){
    this.nombre= this.estadoActual;
    console.log("Nombre actualizado")
  }

}
