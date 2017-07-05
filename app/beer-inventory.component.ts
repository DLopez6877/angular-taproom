import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppComponent } from './app.component'
import { Beer } from './beer.model';


@Component({
  selector: 'beer-list',
  template: `
     <div class={{currentBeer.priceColor}} (click)="isDone(currentBeer)" *ngFor="let currentBeer of childBeerList">
     <table class="table table-bordered">
      <thead>
      <th>Name</th>
      <th>Brand</th>
      <th>Price</th>
      <th>ABV</th>
      <th>Pints available</th>
      </thead>
      <tbody>
        <td>{{currentBeer.name}}</td>
        <td>{{currentBeer.brand}}</td>
        <td>\${{currentBeer.price}}</td>
        <td class={{currentBeer.abvColor}}>{{currentBeer.abv}}%</td>
        <!--<td>{{currentBeer.abv}}%</td>-->
        <td>{{currentBeer.pints}}</td>
        <td><button (click)="editButtonHasBeenClicked(currentBeer)">Edit!</button></td>
      </tbody>
     </table>
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


}
