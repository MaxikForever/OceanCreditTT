import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RandomNumberService {
  private apiUrl = 'https://www.randomnumberapi.com/api/v1.0/random?min=30000&max=50000&count=3';

  constructor(private http: HttpClient) { }

  getRandomNumbers() {
    return this.http.get<number[]>(this.apiUrl);
  }
}