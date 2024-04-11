import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RandomNumberService } from '../../services/random-number-service.service';
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

  constructor(private randomNumberService: RandomNumberService) {


  }

  ngOnInit() {
    this.splitUserName = this.userName?.split(' ');
    this.fetchRandomNumbers();
    this.fetchRandomPercents();
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

}