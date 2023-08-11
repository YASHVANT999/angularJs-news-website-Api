import { Component, OnInit } from '@angular/core';
import { PostServices } from '../Services/post.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css'],
  providers: [PostServices],
})
export class SingleComponent implements OnInit {
  postList: Array<any>;
  postIndex: any;
  accessableIndex: number;
  postContent: string;

  constructor(
    private postService: PostServices,
    private route: ActivatedRoute
  ) {
    this.postList = postService.postList;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      this.postIndex = value.get('id');
      this.accessableIndex = parseInt(this.postIndex);
      this.postContent = this.postList[this.accessableIndex].content;
    });
  }
}
