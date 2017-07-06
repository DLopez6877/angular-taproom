import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule }  from '@angular/forms';
import { BeerComponent } from './beer-inventory.component';
import { EditBeerComponent } from './edit-beer.component';
import { NewBeerComponent } from './new-beer.component';
import { FilterPipe } from './sorter.pipe';

@NgModule({
  imports: [ BrowserModule,
             FormsModule
            ],
  declarations: [ AppComponent,
                  BeerComponent,
                  EditBeerComponent,
                  FilterPipe,
                  NewBeerComponent
                ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
