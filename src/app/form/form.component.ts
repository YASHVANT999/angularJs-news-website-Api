import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  Name: string;
  Email: string;
  Address: string;
  ObjectList: Array<any> = [];

  Add() {
    this.ObjectList.push({
      name: this.Name,
      email: this.Email,
      address: this.Address,
    });
  }

  Del(i: number) {
    this.ObjectList.splice(i, 1);
  }
}
