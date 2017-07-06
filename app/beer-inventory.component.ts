import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppComponent } from './app.component'
import { Beer } from './beer.model';


@Component({
  selector: 'beer-list',
  template: `

      <select (change)="onChange($event.target.value)">
        <option value="showMostPopular">Show Most Popular</option>
        <option value="showStaffPicks">Show Staff Picks</option>
        <option value="showAll" selected="selected">Show All</option>
      </select>

     <div class={{currentBeer.priceColor}} *ngFor="let currentBeer of childBeerList | filter:filterByChoice">
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
        <td><span [style.color]="priceColor(currentBeer)">\${{currentBeer.price}}</span></td>
        <td><span [style.color]="abvColor(currentBeer)">{{currentBeer.abv}}% ABV</span></td>
        <td>{{currentBeer.pints}}</td>
        <td><button (click)="editButtonHasBeenClicked(currentBeer)">Edit!</button></td>
        <p *ngIf="currentBeer.popular === true">Popular*</p>
        <p *ngIf="currentBeer.staffPick === true">Staff Pick*</p>
      </tbody>
     </table>
  `
})

export class BeerComponent {
  @Input() childBeerList: Beer[];
  @Output() clickSender = new EventEmitter();

  filterByChoice: string = "showAll";

  onChange(optionFromMenu) {
    this.filterByChoice = optionFromMenu;
    console.log(this.filterByChoice);
  }

  editButtonHasBeenClicked(beerToEdit: Beer) {
    this.clickSender.emit(beerToEdit);
  }

  abvColor(beer: Beer) {
    if (beer.abv <= 4.5) {
    return '#f49b8b';
    } else if (beer.abv <= 7) {
    return 'tomato';
    } else {
    return '#963a2a';
    }
  }

  priceColor(beer: Beer) {
    if (beer.price <= 4.5) {
    return 'lightblue';
  } else if (beer.price <= 6) {
    return '#0000ff';
    } else {
    return 'navy';
    }
  }
}
