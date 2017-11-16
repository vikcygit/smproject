import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home';
import { NavbarModule } from './navbar';


import { AppComponent } from './app.component';

@NgModule({
  imports: [ BrowserModule, HomeModule, NavbarModule, RouterModule.forRoot([]) ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
