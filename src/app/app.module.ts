import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { CargoordersComponent } from './components/cargoorders/cargoorders.component';
import { ToolbarComponent } from './shared/component/toolbar/toolbar.component';
import { HttpClientModule } from '@angular/common/http';
import { CargodetailsComponent } from './components/cargodetails/cargodetails.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FreightComponent } from './components/icons/freight/freight.component';
import { ActiveOrdersComponent } from './components/icons/active-orders/active-orders.component';
@NgModule({
  declarations: [
    AppComponent,
    CargoordersComponent,
    UpcomingComponent,
    ToolbarComponent,
    CargodetailsComponent,
    FreightComponent,
    ActiveOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
