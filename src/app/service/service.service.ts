import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private url = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {}

  getCharacters(apiUrl: string = `${this.url}/character`) {
    console.log('Retorno da api: ', apiUrl);
    return this.http.get<any>(apiUrl);
  }
}
