import {Component, OnInit} from '@angular/core';
import {AuthService} from './services/auth.service';
import {Router} from '@angular/router';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'caloriv-web';

    constructor(
        private authSrv: AuthService,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        this.authSrv.isAuthChange.subscribe(isAuth => {
            if (isAuth) {
                this.router.navigateByUrl('dishes');
            } else {
                this.router.navigateByUrl('login');
            }
        });
    }
}
