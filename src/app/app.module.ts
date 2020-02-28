import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from "@angular/http";
import { RouterModule} from "@angular/router";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { SeriesComponent } from './series/series.component';


import { SerieService } from './series/serie.service'

import { ROUTES } from './app-routing.module';
import { CreateSerieComponent } from './series/create-serie/create-serie.component'

@NgModule({
  declarations: [
    AppComponent,
    SeriesComponent,
    CreateSerieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    FormsModule
  ],
  providers: [SerieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
