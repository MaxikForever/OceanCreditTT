import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit, OnDestroy {
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