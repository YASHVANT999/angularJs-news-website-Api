import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  postTitle: string;
  postDesc: string;
  imageUrl: string;
  openLink: string;
  bool: boolean = false;
  back: boolean = false;

  // keyUp(username: string) {
  //   this.postTitle = username;
  // }

  // Desc(postDesc: string) {
  //   this.postDesc = postDesc;
  // }
  // Image(image: string) {
  //   this.imageUrl = image;
  // }
  // Link(link: string) {
  //   if (link) {
  //     this.bool = true;
  //     this.link = link;
  //   } else {
  //     this.bool = false;
  //   }
  // }
  fieldsChange($event) {
    if ($event.target.checked == true) {
      this.back = true;
    } else {
      this.back = false;
    }
  }
}
