import { Component } from '@angular/core';
// import { DomSanitizer } from '@angular/platform-browser';
import { Beer } from './beer.model';
import { BeerComponent } from './beer-inventory.component'

 @Component({
   selector: 'app-root',
   template: `
       <div class="container">
        <h1>The Golden Fleece's Inventory {{month}}/{{day}}/{{year}}</h1>
        <h3>{{currentFocus}}</h3>
      <!--Beer list-->
       <beer-list [childBeerList]="masterBeerList" (clickSender)="editBeer($event)"></beer-list>

       <hr>

       <!--Edit beer-->
       <edit-beer [childSelectedBeer]="selectedBeer"
       (decreaseButtonClickedSender)="decreasePints()"
       (increaseButtonClickedSender)="increasePints()"
       (doneButtonClickedSender)="finishedEditing()"></edit-beer>
     </div>

     <!--New beer-->
     <new-beer (newBeerSender)="addBeer($event)"></new-beer>
     `
 })

 export class AppComponent {
   currentFocus: string = 'Our Keg Inventory';
   currentTime = new Date();
   month: number = this.currentTime.getMonth() + 1;
   day: number = this.currentTime.getDate();
   year: number = this.currentTime.getFullYear();
   selectedBeer = null;

  masterBeerList: Beer[] = [
    new Beer('Berlinerweisse', "pFriem", 3, 3.5),
    new Beer('White Dog IPA','El Segundo', 5, 6.9),
    new Beer('Kook - IIPA','Pizza Port', 5, 7.3),
    new Beer('Accumulated Knowledge','Modern Times', 6, 6.2),
    new Beer('Blanche de Chambly','Unibroue', 5, 5),
    new Beer('White Dog IPA','El Segundo', 5, 6.9),
    new Beer('White Dog IPA','El Segundo', 5, 6.9),
    new Beer('White Dog IPA','El Segundo', 5, 6.9),
    new Beer('White Dog IPA','El Segundo', 5, 6.9),
    new Beer('White Dog IPA','El Segundo', 5, 6.9),
    new Beer('Handtruck - Pale','Barley Brown\'s', 7, 5.5)
 ];

   // clickMessage = '';

   editBeer(clickedBeer) {
     this.selectedBeer = clickedBeer;
   }

   finishedEditing() {
     this.selectedBeer = null;
   }

   addBeer(newBeerFromChild: Beer) {
     this.masterBeerList.push(newBeerFromChild);
   }

   decreasePints() {
    this.selectedBeer.pints -= 1;
    if (this.selectedBeer.pints <= 20) {
      this.selectedBeer.priceColor = "bg-danger";
    } else if (this.selectedBeer.pints <= 30){
      this.selectedBeer.priceColor = "bg-warning";
    }
  }

   increasePints() {
     this.selectedBeer.pints += 1;
     if (this.selectedBeer.pints >= 31) {
       this.selectedBeer.priceColor = "bg-success";
     } else if (this.selectedBeer.pints >= 21){
       this.selectedBeer.priceColor = "bg-warning";
     }
   }
  }
