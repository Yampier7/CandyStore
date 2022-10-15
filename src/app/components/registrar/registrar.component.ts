import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  constructor() { }

  ngOnInit(): void {
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'ingrese un email';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
