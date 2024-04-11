import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  //se puede poner como array de estilos con styleUrls: []
})
export class AppComponent {
  /*
  protected title: string = 'clase_1';

  protected onBtn()
  {
    this.title = "hola";
  }
  */
  protected edadUno: number = 0;
  protected edadDos: number = 0;
  protected promedio: number = 0;
  protected suma: number = 0;

  protected Calcular()
  {
    this.suma = this.edadUno + this.edadDos;
    this.promedio = (this.edadUno + this.edadDos)/2;
  }

  protected LimpiarCuadro()
  {
    this.edadUno = 0;
    this.edadDos = 0;
    this.promedio = 0;
    this.suma = 0;
  }
}
