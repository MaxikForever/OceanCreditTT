import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  userName: string | undefined;
  private subscription: Subscription = new Subscription();
  

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.subscription.add(
      this.userService.user$.subscribe(user => {
        // Assuming user can be null, hence the optional chaining
        this.userName = user?.firstName + ' ' + user?.lastName;
      })
    );
  }

  ngOnDestroy(): void {
    // Unsubscribe to avoid memory leaks
    this.subscription.unsubscribe();
  }

}