import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedEventColor = {
    color: 'Peacock',
    class: "peacock",
    background: "#039be5",
    textColor: "#000000"
  };
  paletteColor: any;
  timeEnabled = false;
  allDayEvent = true;
  repeatEvent = false;
  repeatDays = [];

  colors = [
    {
      color: 'Tomato',
      class: "tomato",
      background: "#d50000",
      textColor: "#ffffff"
    },
    {
      color: 'Tangerine',
      class: "tangerine",
      background: "#f4511e",
      textColor: "#ffffff"
    },
    {
      color: 'Sage',
      class: "sage",
      background: "#33b679",
      textColor: "#ffffff"
    },
    {
      color: 'Blueberry',
      class: "blueberry",
      background: "#3f51b5",
      textColor: "#000000"
    },
    {
      color: 'Peacock',
      class: "peacock",
      background: "#039be5",
      textColor: "#000000"
    },
    {
      color: 'Grape',
      class: "grape",
      background: "#8e24aa",
      textColor: "#ffffff"
    },
    {
      color: 'Graphite',
      class: "graphite",
      background: "#616161",
      textColor: "#ffffff"
    },
    {
      color: 'Basil',
      class: "basil",
      background: "#0b8043",
      textColor: "#ffffff"
    }
  ];
  paletteColorChange() {
    this.paletteColor = this.selectedEventColor.background;
  }
}
