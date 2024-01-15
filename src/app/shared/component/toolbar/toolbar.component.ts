import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent {
  @Input() title: string = '';
  constructor(private location: Location) {}

  goBack() {
    this.location.back(); // Utiliza la función back() para volver atrás en la historia del navegador
  }
}
