import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  form = this.fb.group({
    data: this.fb.array([this.addRow()])
  })

  data$ = new Subject();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log(this.getData.controls)
  }
  
  addRow() {
    return this.fb.group({
      coluna1: ['', [this.validateNumber(2)]],
      coluna2: [''],
      coluna3: [0],
    })
  }
  
  addRowOnData() {
    this.getData.push(this.addRow());
    console.log(this.getData.controls)
  }

  removeRow(index: number) {
    this.getData.removeAt(index)
  }
  
  trackByFn(index: number, item: AbstractControl): number {
    return index;
  }
  
  onSubmit() {
    console.log(this.form.getRawValue())
  }

  validateNumber(target: number): ValidatorFn | null {
    return (control: AbstractControl): ValidationErrors | null => {
      const resValidate = control.value && Number(control.value) === target;
      return resValidate ? { errorNumber: true } : null;
    }
  }

  get getData(): FormArray {
    return this.form.get('data') as FormArray;
  }
}
