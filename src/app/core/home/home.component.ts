import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  onSubmit(form: NgForm) {
    console.log('====================================');
    console.log(form);
    console.log('====================================');
  }
}