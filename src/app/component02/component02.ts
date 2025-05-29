import { Component } from '@angular/core';
import { ComponentApp } from '../component.app/component.app';

@Component({
  selector: 'app-component02',
  imports: [ComponentApp],
  templateUrl: './component02.html',
  styleUrl: './component02.css'
})
export class Component02 {
  newMensagem() {
    alert("Hello World");
  }

}
