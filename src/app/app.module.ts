import { ProductsComponent } from './pages/products/products.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryTabComponent } from './components/category-tab/category-tab.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CategoryTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
