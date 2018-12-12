import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  public resultado: string = '';

  constructor() { }

  ngOnInit() {
  }

  public escribe(parcial: string) {
    this.resultado += parcial;
  }

  public calcula() {
    this.resultado = eval(this.resultado);
  }

  public retrocede() {
    if (!isNaN(Number(this.resultado))) {
      this.resultado = this.resultado.slice(0, -1);
    }
  }
}
