import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RandomNumberService } from '../../services/random-number-service.service';
import { RandomUserService } from '../../services/random-user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  @Input() userName!: string | undefined;
  splitUserName: string[] | undefined;
  randomNumbers: number[] = [];
  randomPercents: number[] = [];
  users: any[] = [];
  time: number[] = [];
  timeSlots: string[] = [];
  userNumbersOnPage: number = 3;

  constructor(
    private randomNumberService: RandomNumberService,
    private randomUserService: RandomUserService
  ) { }

  ngOnInit() {

    this.splitUserName = this.userName?.split(' ');
    this.fetchRandomNumbers();
    this.fetchRandomPercents();
    this.fetchRandomUsers();
    this.fetchRandomHour();
    // reload to solve the bug with no data loading when we are routing to the component
    if (!localStorage.getItem('reload')) {
      localStorage.setItem('reload', 'true');
      location.reload();
    } else {
      localStorage.removeItem('reload');
    }
  }


  fetchRandomNumbers() {
    this.randomNumberService.getRandomNumbers(30000, 50000).subscribe(data => {
      this.randomNumbers = data;
      console.log(this.randomNumbers);
    });

  }


  fetchRandomPercents() {
    this.randomNumberService.getRandomNumbers(50, 95).subscribe(data => {
      this.randomPercents = data;
      console.log(this.randomPercents);
    });

  }

  // currently need only 3 users
  fetchRandomUsers() {
    this.randomUserService.getRandomUsers(this.userNumbersOnPage).subscribe(users => {
      this.users = users.map(user => user.results[0]);

    });
  }

  fetchRandomHour() {
    this.randomNumberService.getRandomNumbers(0, 22, this.userNumbersOnPage).subscribe(hours => {
      this.time = hours;
      this.prepareTimeSlots();
    })

  }

  prepareTimeSlots() {
    this.timeSlots = this.time.map(hour => {
      let endHour = hour + 2;
      return `${hour}:00 - ${endHour}:00`;
    });
  }



}