import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-to-know-better',
  templateUrl: './form-to-know-better.component.html',
  styleUrls: ['./form-to-know-better.component.css']
})
export class FormToKnowBetterComponent implements OnInit {
  userForm: FormGroup;
  isPageToKnowYouBetter = true;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]
      ],
    }
    );
  }

  get usForm() { return this.userForm.controls; }

  onSubmit() {
    if(this.userForm.valid) {
      alert('eshte valide ecium')
    } else {
      alert('nuk eshte valide rri trrus')
    }

  }


}
