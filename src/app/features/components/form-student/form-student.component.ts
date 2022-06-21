import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-student',
  templateUrl: './form-student.component.html',
  styleUrls: ['./form-student.component.css']
})
export class FormStudentComponent implements OnInit {
  studentForm!: FormGroup

  constructor(
    private fb: FormBuilder
  ) {
    this.studentForm = this.fb.group({
      name: new FormControl("", [Validators.required]),
      lastname: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      birthDate: new FormControl("", [Validators.required])
    })
   }

  ngOnInit(): void {
  }
}
