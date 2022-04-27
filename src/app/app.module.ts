import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { MenuComponent } from './modules/menu/menu.component';
import { MapComponent } from './modules/map/map.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
    imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, MatButtonModule ],
    declarations: [ AppComponent, MenuComponent, MapComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }