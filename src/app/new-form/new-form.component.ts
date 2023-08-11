import { Component } from '@angular/core';
import { FormsModule, NgControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css'],
})
export class NewFormComponent {
  onSubmit(f: NgForm) {
    console.log(f.value);
  }

  getFullNameValue(f: any) {
    // console.log(f.value.fullName);
  }

  getEmailValue(f: any) {
    // console.log(f.value.email);
  }

  getAddressValue(f: any) {
    // console.log(f.value.address);
  }
}
