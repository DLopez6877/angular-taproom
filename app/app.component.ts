import { Component } from '@angular/core';
// import { DomSanitizer } from '@angular/platform-browser';
import { Beer } from './beer.model';
import { BeerComponent } from './beer-inventory.component'

 @Component({
   selector: 'app-root',
   template: `
        <div class="login">
          <input type="password" placeholder="Password" />
          <button type="button" (click)="login()">Employee Login</button>
        </div>
       <div class="container">
        <img src="/resources/img/Logo.png" class="logo">

        <div class="line-1"></div>
        <div class="line-2"></div>
        <div class="line-3"></div>
        <div class="employeePermission-wrapper">
        <!--New beer-->
        <new-beer  *ngIf="this.employeePermission === true" (newBeerSender)="addBeer($event)"></new-beer>
        <!--Edit beer-->
        <edit-beer  *ngIf="this.employeePermission === true" [childSelectedBeer]="selectedBeer"
        (decreaseButtonClickedSender)="decreasePints($event)"
        (increaseButtonClickedSender)="increasePints($event)"
        (popularClickedSender)="togglePopular($event)"
        (staffPickClickedSender)="toggleStaffPick($event)"
        (doneButtonClickedSender)="finishedEditing()"></edit-beer>
        </div>
        <!--Beer list-->
        <beer-list [parentEmployeePermission]="employeePermission" [childBeerList]="masterBeerList" (clickSender)="editBeer($event)"></beer-list>
        </div>

     `
 })

 export class AppComponent {
   selectedBeer = null;
   employeePermission : boolean = false;

  masterBeerList: Beer[] = [
    new Beer('Berlinerweisse', "pFriem", 3, 3.5),
    new Beer('White Dog IPA','El Segundo', 5, 6.9),
    new Beer('Kook - IIPA','Pizza Port', 5, 7.3),
    new Beer('Accumulated Knowledge','Modern Times', 6, 6.2),
    new Beer('Blanche de Chambly','Unibroue', 5, 5),
    new Beer('Luponic Distortion','Firestone Walker', 5, 5.9),
    new Beer('Edelwiss','Schneider', 6, 6.2),
    new Beer('Galaxy - White IPA w Brett', 'Anchorage', 4, 7),
    new Beer('Two Flowers - Hemp & CBD IPA','Coalition', 6, 6),
    new Beer('Urban Farmhouse','The Commons', 5, 5.3),
    new Beer('Handtruck - Pale','Barley Brown\'s', 7, 5.5)
 ];

   // clickMessage = '';
   login() {
     if (this.employeePermission === false ) {
       this.employeePermission = true;
       console.log(this);
       console.log(this.employeePermission )
     } else {
       this.employeePermission = false;
     }
   }

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

   togglePopular(clickedBeer: Beer) {
     if(clickedBeer.popular === false) {
       clickedBeer.popular = true;
       console.log('true popular');
     } else {
       clickedBeer.popular = false;
       console.log('false popular');
     }
   }

   toggleStaffPick(clickedBeer: Beer) {
     if(clickedBeer.staffPick === false) {
       clickedBeer.staffPick = true;
       console.log('true staffPick');
     } else {
       clickedBeer.staffPick = false;
       console.log('false staffPick');
     }
   }
  }
