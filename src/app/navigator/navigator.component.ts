import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {

  isAuth?: boolean;
  collapsed = true;

  constructor(
      private authSrv: AuthService,
      private router: Router
  ) { }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  ngOnInit() {
    this.authSrv.isAuthChange.subscribe(newAuth => {
      this.isAuth = newAuth;
    });
    this.router.events.subscribe(() => {
      this.collapsed = true;
    });
  }

  logout() {
    if (this.authSrv.isAuth) {
      this.authSrv.logout();
    }
  }

}
