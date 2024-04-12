import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {
  private apiUrl = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) { }

  getRandomUsers(userNumber: number): Observable<any[]> {
    const requests = Array.from({ length: userNumber }, (_, i) =>
      this.http.get<any>(`${this.apiUrl}?seed=${new Date().getTime()}_${i}`)
    );
    return forkJoin(requests);
  }
}