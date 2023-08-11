import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsDataService } from '../Services/news-data.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  newData: Array<any>;

  constructor(private _apiService: NewsDataService) {}

  ngOnInit() {
    this._apiService.getdata().subscribe((data) => {
      console.log(data['articles']);
      this.newData = data['articles'];
      console.log(this.newData[0].source.name);
    });
  }
}
