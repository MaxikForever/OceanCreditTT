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

  constructor(private randomNumberService: RandomNumberService) {


  }

  ngOnInit() {
    this.splitUserName = this.userName?.split(' ');
    this.fetchRandomNumbers();
  }


  fetchRandomNumbers() {
    this.randomNumberService.getRandomNumbers().subscribe(data => {
      this.randomNumbers = data;
      console.log(this.randomNumbers);
    });

  }


}