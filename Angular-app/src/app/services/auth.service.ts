import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject: BehaviorSubject<User | null>;

  constructor() {
    let userData = null;
    if (typeof localStorage !== 'undefined') {
      const storedUserData = localStorage.getItem('user');
      userData = storedUserData ? JSON.parse(storedUserData) : null;
    }
    this.userSubject = new BehaviorSubject<User | null>(userData);
  }

  public get user$(): Observable<User | null> {
    return this.userSubject.asObservable();
  }

  saveUser(userData: User): void {
    localStorage.setItem('user', JSON.stringify(userData)); // Save user data to localStorage
    this.userSubject.next(userData);
  }

  clearUser(): void {
    localStorage.removeItem('user'); // Remove user data from localStorage
    this.userSubject.next(null);
  }
}
