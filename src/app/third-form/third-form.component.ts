import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-third-form',
  templateUrl: './third-form.component.html',
  styleUrls: ['./third-form.component.css'],
})
export class ThirdFormComponent {
  form: any;
  regex: string = '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  contactRegex: string = '91[789][0-9]{9}';
  constructor(fb: FormBuilder) {
    // this.form = fb.group({
    //   fullName: ['', [Validators.required, Validators.minLength(5)]],
    //   email: ['', [Validators.required, Validators.pattern(this.regex)]],
    //   contactDetails: fb.group({
    //     address: ['', [Validators.required]],
    //     shippingAddress: ['', [Validators.required]],
    //     contactNo: [
    //       '91',
    //       [Validators.required, Validators.pattern(this.contactRegex)],
    //     ],
    //     skills: fb.array([]),
    //   }),
    // });

    this.form = new FormGroup({
      fullName: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(this.regex),
      ]),
      contactDetails: new FormGroup({
        address: new FormControl('', Validators.required),
        shippingAddress: new FormControl('', Validators.required),
        contactNo: new FormControl('91', [
          Validators.required,
          Validators.pattern(this.contactRegex),
        ]),
      }),
      skills: new FormArray([]),
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }

  get fullName() {
    return this.form.get('fullName');
  }

  get email() {
    return this.form.get('email');
  }

  get address() {
    return this.form.get('contactDetails.address');
  }

  get shippingAddress() {
    return this.form.get('contactDetails.shippingAddress');
  }

  get contactNo() {
    return this.form.get('contactDetails.contactNo');
  }

  get Skills() {
    return this.form.get('skills') as FormArray;
  }

  addSkills(skills: any) {
    this.Skills.push(new FormControl(skills.value));
    skills.value = '';
  }

  Del(i: number) {
    this.Skills.removeAt(i);
  }

  // getControls() {
  //   return (this.form.get('skills') as FormArray).controls;
  // }
}
