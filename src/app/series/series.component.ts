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
    this.getSeries();
  }

  getSeries() {
    this.serieService.getSeries().subscribe(res => {
      console.log(res);
      console.log(res['status']);
      console.log(res.body['data']);
      console.log("Listagem efetuada com sucesso");
      this.Series = res.body['data']
    },
    error => {
      console.log(error.status);
      console.log("Erro na listagem")
    })
  }

  getById(_id) {
    this.serieService.getById(_id).subscribe(res => {
      console.log(res);
    })
  }
}
