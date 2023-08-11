import { Component } from '@angular/core';
import { NewsDataService } from '../Services/news-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  newData: Array<any>;
  postImage: string;
  constructor(private _apiService: NewsDataService) {}
  ngOnInit() {
    this._apiService.getdata().subscribe((data) => {
      console.log(data['articles']);
      this.newData = data['articles'];
    });
  }
}
