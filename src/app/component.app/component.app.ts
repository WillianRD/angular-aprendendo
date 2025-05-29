import { Component } from '@angular/core';

@Component({
  selector: 'app-component-app',
  imports: [],
  templateUrl: './component.app.html',
  styleUrl: './component.app.css'
})
export class ComponentApp {
  name : String = "Leide Caradozo"
  dataLancamento : String = "26 de Maio de 2026"
  onde : String = "Onde ?"
  localizacao : String = "Na casa da"
}
