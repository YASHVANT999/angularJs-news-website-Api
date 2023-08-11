import { Component } from '@angular/core';
import { NewsDataService } from '../Services/news-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-desc-page',
  templateUrl: './desc-page.component.html',
  styleUrls: ['./desc-page.component.css'],
})
export class DescPageComponent {
  postData: Array<any>;
  postIndex: any;
  accessableIndex: number;
  postContent: string;
  postAuthor: string;
  postImage: string;

  // @Input() dataList: Array<object>;

  constructor(
    private postService: NewsDataService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((value) => {
      this.postIndex = value.get('id');
      this.accessableIndex = parseInt(this.postIndex);
    });
  }

  ngOnInit() {
    this.postService.getdata().subscribe((response) => {
      this.postData = response['articles'];
      this.postContent = this.postData[this.accessableIndex].description;
      this.postAuthor = this.postData[this.accessableIndex].author;
      this.postImage = this.postData[this.accessableIndex].urlToImage;
    });
  }
}
