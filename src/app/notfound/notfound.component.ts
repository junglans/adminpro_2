import { Component } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css'
  ]
})
export class NotfoundComponent   {

  private year: number;

  constructor() { 

      this.year = new Date().getFullYear();

  }

  public get Year(): number {
    return this.year;
  }
 
}
