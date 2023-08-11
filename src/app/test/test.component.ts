import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  ArrayList: Array<string> = ['one', 'two', 'three', 'four', 'five'];
  ObjectList: Array<any> = [
    { id: 1, Obj: 'one' },
    { id: 2, Obj: 'two' },
    { id: 3, Obj: 'three' },
    { id: 4, Obj: 'four' },
    { id: 5, Obj: 'five' },
  ];

  stepFrom: string;

  Add() {
    this.ObjectList.push({ id: 6, Obj: 'six' });
  }

  Del(i: number) {
    // let ind = this.ObjectList.indexOf(obj);
    // console.log(ind);
    this.ObjectList.splice(i, 1);
  }

  Fun(str: string) {
    this.stepFrom = str;
  }
}
