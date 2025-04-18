import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private url = 'https://rickandmortyapi.com/api/';

  constructor(private http: HttpClient) {}

  public getCharacters(apiUrl: string = `${this.url}character/`) {
    return this.http.get<any>(apiUrl);
  }

  public getLocation(apiUrl: string = `${this.url}location`) {
    return this.http.get<any>(apiUrl);
  }

  public getEpisodes(apiUrl: string = `${this.url}episode`) {
    return this.http.get<any>(apiUrl);
  }
}
