import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RandomNumberService {
  constructor(private http: HttpClient) { }

  getRandomNumbers(min: number, max: number, count: number = 3) {
    const apiUrl = `https://www.randomnumberapi.com/api/v1.0/random?min=${min}&max=${max}&count=${count}`;
    return this.http.get<number[]>(apiUrl);
  }
}