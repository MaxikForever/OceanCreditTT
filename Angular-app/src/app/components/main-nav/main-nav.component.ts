import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { removeUserData } from '../../shared/store/userData.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrl: './main-nav.component.css'
})
export class MainNavComponent {
  private breakpointObserver = inject(BreakpointObserver);
  @Input() userName!: string | undefined;

  constructor(
    private store: Store,
    private router: Router
  )
  {

  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    logOut(){
      
      this.store.dispatch(removeUserData());
      this.router.navigate(['/login'])
    }
}
