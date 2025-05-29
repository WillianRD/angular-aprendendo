import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentApp } from "./component.app/component.app";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComponentApp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-aprendendo';
}
