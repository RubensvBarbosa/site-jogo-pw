import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  isPAdmin: boolean = false
  private subscription?: Subscription;


  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.router.events.subscribe(() => {
      this.checkCurrentRoute();
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  checkCurrentRoute(): void {
    if (this.router.url === '/padmin' || this.router.url === '/padmin/home') {
      this.isPAdmin = true;
    } else {
      this.isPAdmin = false;
    }
  }

}
