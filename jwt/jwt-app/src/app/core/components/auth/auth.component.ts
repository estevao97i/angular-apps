import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  form!: FormGroup
  constructor(private fb: FormBuilder, private service: AuthService) {}
  
  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(3)]]
    })
  }

  ngSubmit() {
    this.service.getAuth(this.form.getRawValue()).subscribe({
      next: () => {},
      error: (err) => console.log
    });
    console.log(this.form.getRawValue());
  }

}
