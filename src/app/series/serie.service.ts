import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Serie } from './serie.model';
import { HttpClient} from '@angular/common/http';
import { api } from './../app.api';

@Injectable()
export class SerieService {

  url = 'http://localhost:4200/serie';

  constructor(private http: HttpClient) { }

  getSeries(): Observable<Serie[]> {
    return this.http.get<Serie[]>(`${api}/serie`);
  }

  criar(serie: any) {
    return this.http.post(`${api}/serie`, serie);
  }
  
}
