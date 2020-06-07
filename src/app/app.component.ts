import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedColor = {
    color: 'Peacock',
    background: "#039be5",
  };

  paletteColor = "#039be5";

  colors = [
    {
      color: 'Tomato',
      background: "#d50000"
    },
    {
      color: 'Tangerine',
      background: "#f4511e"
    },
    {
      color: 'Sage',
      background: "#33b679"
    },
    {
      color: 'Blueberry',
      background: "#3f51b5"
    },
    {
      color: 'Peacock',
      background: "#039be5"
    },
    {
      color: 'Grape',
      background: "#8e24aa"
    },
    {
      color: 'Graphite',
      background: "#616161",
    },
    {
      color: 'Basil',
      background: "#0b8043"
    }
  ];

  paletteColorChange() {
    this.paletteColor = this.selectedColor.background;
  }
}
