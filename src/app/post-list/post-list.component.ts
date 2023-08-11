import { Component } from '@angular/core';
import { PostServices } from '../Services/post.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers: [PostServices],
})
export class PostListComponent {
  postList: Array<any>;
  constructor(private postService: PostServices) {
    this.postList = postService.postList;
  }
}
