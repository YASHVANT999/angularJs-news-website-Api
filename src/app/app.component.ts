import {
  Component,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
  OnInit,
} from '@angular/core';
import { PostComponent } from './post/post.component';
import { PostServices } from './Services/post.service';
import { TestService } from './Services/test.service';
import { Test } from './models/test';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [PostServices],
})
export class AppComponent {
  title = 'my-first-project';
  postdata: Array<any>;

  // today: Date = new Date();

  // obj = { id: 1, country: 'India' };

  // Text: string = 'Hello this is yashvant gupta anfd my university roll is 66';

  // postList: Array<any>;
  // testList: Array<any>;

  // constructor(private testService: TestService) {
  //   // let postServices = new PostServices();
  //   this.testList = testService.tests;
  // }

  // add() {
  //   if (this.testService.tests.length == 0) {
  //     this.testService.tests.push({
  //       id: 0,
  //       testHead: 'Test ' + (0).toString(),
  //     });
  //     // lastElement = this.testService.tests[this.testService.tests.length - 1];
  //   } else {
  //     let lastElement =
  //       this.testService.tests[this.testService.tests.length - 1];
  //     let newTest: Test = {
  //       id: lastElement.id + 1,
  //       testHead: 'Test ' + (lastElement.id + 1).toString(),
  //     };

  //     this.testService.added(newTest);
  //   }
  //   console.log(this.testService.tests[this.testService.tests.length - 1]);
  // }

  // delete(i) {
  //   this.testService.del(i);
  // }
}
