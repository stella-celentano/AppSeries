import { Component, OnInit } from '@angular/core';
import { SerieService } from './serie.service';
import { Serie } from './serie.model'

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  Series: Serie[];

  constructor(private serieService: SerieService) { }

  ngOnInit() {
    this.getSeries()
  }

  teste(){
    console.log('entrei viado')
  }

  getSeries() {
    this.serieService.getSeries().subscribe(res => {
      console.log(res)
      this.Series = res['data']
    })
  }


}
