import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Serie } from './serie.model';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  private url = 'https://localhost:3000/serie';

  constructor(private http: HttpClient) { }

  getSeries(): Observable<Serie[]> {
    return this.http.get<Serie[]>(this.url);
  }
}
