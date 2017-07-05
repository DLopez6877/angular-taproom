import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Beer } from './beer.model';

@Component({
  selector: 'edit-beer',
  template: `
    <div>
        <div *ngIf="childSelectedBeer">
          <h3>{{childSelectedBeer.description}}</h3>
          <p>Beer Complete? {{childSelectedBeer.done}}</p>
          <hr>
          <h3>Edit Beer</h3>
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
          <button (click)="decreaseButtonClicked()">-1</button>
          <button (click)="increaseButtonClicked()">+1</button>
          <br>
          <br>
          <button (click)="doneButtonClicked()">Done</button>
        </div>
      </div>
  `
})

export class EditBeerComponent {
  @Input() childSelectedBeer: Beer;
  @Output() doneButtonClickedSender = new EventEmitter();
  @Output() decreaseButtonClickedSender = new EventEmitter();
  @Output() increaseButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
  decreaseButtonClicked() {
    this.decreaseButtonClickedSender.emit();
  }
  increaseButtonClicked() {
    this.increaseButtonClickedSender.emit();
  }
}
