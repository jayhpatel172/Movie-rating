import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.sass']
})
export class WelcomeComponent implements OnInit, OnDestroy {
  isAuth: boolean;
  authSubscription: Subscription;
  constructor(
    private router : Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus
    })
  }

  signup() {
    this.router.navigate(['/signup']);
  }

  login() {
    this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }
}
