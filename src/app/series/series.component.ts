import { Component, OnInit } from '@angular/core';
import { SerieService } from './serie.service';
import { Serie } from './serie.model'
import { Router } from '@angular/router';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  Series: Serie[];

  constructor(private serieService: SerieService, private router: Router) { }

  ngOnInit(): void {
    this.getSeries();
  }

  getSeries(): void {
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

  getById(_id: string): void {
    this.serieService.getById(_id).subscribe(res => {
      console.log(res);
    })
  }

  deleteSerie(_id: string): void {
    if(confirm("Confirmar exclusão?")) {
      this.serieService.deleteSerie(_id).subscribe(res =>{
        console.log(res);
        location.reload();
      })
    }
  }
}
