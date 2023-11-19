import { Component } from '@angular/core';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
}
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  tiles_global: Tile[] = [
    {cols: 2, rows: 1, color: 'lightblue'},
    {cols: 1, rows: 1, color: 'lightgreen'},
    {cols: 1, rows: 1, color: 'lightpink'},
  ];
  tiles_what_we_do: Tile[] = [
    {cols: 1, rows: 1, color: 'lightblue'},
    {cols: 1, rows: 1, color: 'lightgreen'},
    {cols: 1, rows: 1, color: 'lightpink'},
    {cols: 1, rows: 1, color: 'lightblue'},
    {cols: 1, rows: 1, color: 'lightgreen'},
    {cols: 1, rows: 1, color: 'lightpink'},
  ];
}
