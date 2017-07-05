import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppComponent } from './app.component'
import { Beer } from './beer.model';


@Component({
  selector: 'beer-list',
  template: `
  <ul>
     <li class={{currentBeer.priceColor}} (click)="isDone(currentBeer)" *ngFor="let currentBeer of childBeerList">

     {{currentBeer.name}} -  {{currentBeer.brand}} - \${{currentBeer.price}} - {{currentBeer.abv}}% - {{currentBeer.pints}}

     <button (click)="editButtonHasBeenClicked(currentBeer)">Edit!</button></li>
 </ul>
  `
})


export class BeerComponent {
  @Input() childBeerList: Beer[];
  @Output() clickSender = new EventEmitter();

  isDone(clickedBeer: Beer) {
    if(clickedBeer.done === true) {
      alert("This task is done!");
    }
  }

  editButtonHasBeenClicked(beerToEdit: Beer) {
    this.clickSender.emit(beerToEdit);
  }
  addBeer() {
    // this.clickMessage = 'It is ok Daniel, you will get it';
  }
}
