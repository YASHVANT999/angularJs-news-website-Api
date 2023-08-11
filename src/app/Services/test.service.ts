import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  tests: Array<any> = [
    { id: 1, testHead: 'Test ' + '1' },
    { id: 2, testHead: 'Test ' + '2' },
    { id: 3, testHead: 'Test ' + '3' },
    { id: 4, testHead: 'Test ' + '4' },
    { id: 5, testHead: 'Test ' + '5' },
  ];

  added(data) {
    this.tests.push(data);
  }

  del(i: number) {
    this.tests.splice(i, 1);
  }
}
