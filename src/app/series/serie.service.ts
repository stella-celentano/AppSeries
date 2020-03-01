import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Serie } from './serie.model';
import { HttpClient, HttpResponse} from '@angular/common/http';
import { api } from './../app.api';

@Injectable()
export class SerieService {

  constructor(private http: HttpClient) { }

  getSeries(): Observable<HttpResponse<Serie[]>> {
    return this.http.get<Serie[]>(`${api}/serie`,{observe: 'response'});
  }

  getById(_id): Observable<Serie> {
    return this.http.get<Serie>(`${api}/serie/${_id}`)
  }

  criar(serie: any) {
    return this.http.post(`${api}/serie`, serie);
  }

}
