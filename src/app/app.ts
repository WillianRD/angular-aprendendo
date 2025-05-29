import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentApp } from "./component.app/component.app";
import { Component02 } from './component02/component02';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComponentApp, Component02],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-aprendendo';
}
