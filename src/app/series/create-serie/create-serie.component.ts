import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Serie } from '../serie.model';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-create-serie',
  templateUrl: './create-serie.component.html',
  styleUrls: ['./create-serie.component.css']
})
export class CreateSerieComponent implements OnInit {

  serie: any;

  constructor(private serieService: SerieService) { }

  ngOnInit() {
    this.serie = {};
  }

  criar(frm: FormGroup) {
    this.serieService.criar(this.serie).subscribe(res => {
      console.log(res);
      frm.reset();
    });
  }

}
