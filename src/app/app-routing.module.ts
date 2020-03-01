import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeriesComponent } from './series/series.component';
import { CreateSerieComponent } from './series/create-serie/create-serie.component';
import { UpdateComponent } from './series/update/update.component';


export const ROUTES: Routes = [
  {path: 'series', component: SeriesComponent},
  {path: 'series/create', component: CreateSerieComponent},
  {path: 'series/update/:id', component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
