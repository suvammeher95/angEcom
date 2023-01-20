import { HttpClient } from '@angular/common/http';
import { Component, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  feedbacks: any[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.onViewAllFeedbacks();
  }
  onFormSubmit(homeForm: NgForm) {
    this.http
      .post('firebaseURL', homeForm.value)
      .subscribe((responseData) => {});
  }
  onViewAllFeedbacks() {
    this.http
      .get('firebaseURL')
      .pipe(
        map((responseData) => {
          const feedbackArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              feedbackArray.push(
                responseData[key as keyof typeof responseData]
              );
            }
          }
          this.feedbacks = feedbackArray;
        })
      )
      .subscribe((responseData) => {});
  }
  onDeleteAllFeedbacks() {
    this.http.delete('firebaseURL').subscribe((responseData) => {});
  }
}
