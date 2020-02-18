import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeriesComponent } from './series/series.component';


export const ROUTES: Routes = [
  {path: 'series', component: SeriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
