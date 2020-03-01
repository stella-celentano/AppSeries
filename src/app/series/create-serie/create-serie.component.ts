import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SerieService } from '../serie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-serie',
  templateUrl: './create-serie.component.html',
  styleUrls: ['./create-serie.component.css']
})
export class CreateSerieComponent implements OnInit {

  serie: any;

  constructor(private serieService: SerieService, private router: Router) { }

  ngOnInit() {
    this.serie = {};
  }

  criar(frm: FormGroup) {
    this.serieService.criar(this.serie).subscribe(res => {
      console.log(res);
      frm.reset();
      this.router.navigate(['/series'])
    });
  }

}
