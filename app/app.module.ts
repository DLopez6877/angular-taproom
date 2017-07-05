import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule }  from '@angular/forms';
import { BeerComponent } from './beer-inventory.component';
import { EditBeerComponent } from './edit-beer.component';
import { NewBeerComponent } from './new-beer.component';

@NgModule({
  imports: [ BrowserModule,
             FormsModule
            ],
  declarations: [ AppComponent,
                  BeerComponent,
                  EditBeerComponent,
                  NewBeerComponent
                ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
