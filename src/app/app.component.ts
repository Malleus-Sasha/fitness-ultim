import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from 'store';
import { AuthService, User } from './auth/shared/services/auth.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'fitness-ultim';

  user$: Observable<User>;
  subscription: Subscription;

  constructor(
    private store: Store,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.subscription = this.authService.auth$.subscribe();
    this.user$ = this.store.select<User>('user');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
