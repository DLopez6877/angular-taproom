import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Beer } from './beer.model';

@Component({
  selector: 'edit-beer',
  template: `
    <div>
        <div *ngIf="childSelectedBeer">
          <div id="edit-beer-wrapper">
          <h1>Edit Beer</h1>
          <label>Enter Beer Name:</label>
          <br>
          <input [(ngModel)]="childSelectedBeer.name">
          <br>
          <label>Enter Beer Brand:</label>
          <br>
          <input [(ngModel)]="childSelectedBeer.brand">
          <br>
          <label>Enter Beer Price:</label>
          <br>
          <input [(ngModel)]="childSelectedBeer.price">
          <br>
          <label>Enter Beer ABV (1-3):</label>
          <br>
          <input [(ngModel)]="childSelectedBeer.abv">
          <br>
          <label>Edit number of pints available:</label>
          <br>
          <button (click)="decreaseButtonClicked()" class="pints-available">-1</button>
          <button (click)="increaseButtonClicked()" class="pints-available">+1</button>
          <br>
          <label>Customer Favorite?</label>
          <input type="checkbox" (click)="popularClicked(childSelectedBeer)"/><br>
          <label>Staff Favorite?</label>
          <input type="checkbox" (click)="staffPickClicked(childSelectedBeer)"/><br>
          <br>
          <button (click)="doneButtonClicked()">Done 🍻</button>
          </div>
        </div>
      </div>
  `
})

export class EditBeerComponent {
  @Input() childSelectedBeer: Beer;
  @Output() doneButtonClickedSender = new EventEmitter();
  @Output() decreaseButtonClickedSender = new EventEmitter();
  @Output() increaseButtonClickedSender = new EventEmitter();
  @Output() popularClickedSender = new EventEmitter();
  @Output() staffPickClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }

  decreaseButtonClicked() {
    this.decreaseButtonClickedSender.emit();
  }

  increaseButtonClicked() {
    this.increaseButtonClickedSender.emit();
  }

  popularClicked() {
    this.popularClickedSender.emit(this.childSelectedBeer);
  }

  staffPickClicked() {
    this.staffPickClickedSender.emit(this.childSelectedBeer);
  }
}
