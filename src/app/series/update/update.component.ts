import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SerieService } from '../serie.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  
  private id: number;
  name: String ='';
  abstract: String = '';
  release: Date;

  serieForm: FormGroup

  constructor(
    private serieService: SerieService,
    private route: ActivatedRoute,
    private formBiulder: FormBuilder,
    private router : Router
  ) { }

  ngOnInit(){
    this.id = this.route.snapshot.params.id;

    this.serieForm = this.formBiulder.group({
      'id': [null],
      'name': [null,[Validators.required]],
      'abstract': [null,[Validators.required]],
      'release': [null,[Validators.required]]
    })

    this.getById(this.id)
  }

  getById(id: number){
    this.serieService.getById(id).subscribe(res =>{
      console.log(res)
      this.serieForm.patchValue({
        id: res['data']['id'],
        name: res['data']['name'],
        abstract: res['data']['abstract'],
        release: res['data']['release']
      })
    })
  }

  updateSerie(form){
    console.log(form)
    this.serieService.updateSerie(this.id, form).subscribe(res =>{
      console.log(res)
    })
    this.router.navigate(['/series'])
  }
}
