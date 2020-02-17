import { Component, OnInit } from '@angular/core';
import { SerieService } from './serie.service';
import { Serie } from './serie.model'

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  responseSeries: Serie[];

  constructor(private serieService: SerieService) { }

  ngOnInit() {
    this.getSeries()
  }

  getSeries() {
    this.serieService.getSeries().subscribe(responseSeries => {
      this.responseSeries = responseSeries['data']
    })
  }


}
