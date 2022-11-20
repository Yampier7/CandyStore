import { Consult } from './../models/consult';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const base_url = environment.basePath1;

@Injectable({
  providedIn: 'root'
})
export class ConsultService {

  constructor(private http: HttpClient) { }

  saveConsult(consult: any) {
    const endpoint = `${base_url}consults`;
    return this.http.post<Consult>(endpoint, consult);
  }

  searchOthers(categoria: string, title: string) {
    return this.http.get<Consult[]>(
      `${base_url}consults/search/others?categoria=${categoria}&title=${title}`
    );
  }

}
