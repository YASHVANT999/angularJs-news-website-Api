import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NewsDataService {
  constructor(private _http: HttpClient) {}

  getdata() {
    return this._http.get(
      'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=045f6c8106f74c1981cd398331d9f4a8'
    );
  }
}
