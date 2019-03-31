import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';

class LoginData {
    constructor(
        public email: string,
        public password: string
    ) {
    }
}

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
    model = new LoginData('viktor@softdeveloper.ru', 'uu9jfc');

    submitted = false;
    actionError = '';

    onSubmit() {
        this.actionError = '';
        this.submitted = true;
        this.authSrv.login(this.model.email, this.model.password)
            .catch((errorMesssage) => {
                this.actionError = errorMesssage;

            })
            .finally(() => {
                this.submitted = false;
            });
    }

    constructor(public authSrv: AuthService) {
    }

    ngOnInit() {
        this.authSrv.isAuthChange.subscribe(value => {
            if (value) {
                this.actionError = '';
            }
        });
    }

}
