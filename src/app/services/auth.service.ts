import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    isAuth?: boolean;
    isLoginError?: boolean;
    fireAuth?: AngularFireAuth;
    userId?: string;

    isAuthChange: Subject<boolean> = new Subject<boolean>();

    constructor(public afAuth: AngularFireAuth) {
        this.fireAuth = afAuth;
        this.isLoginError = false;
        afAuth.user.subscribe(user => {
            if (user) {
                this.isAuth = true;
                this.userId = user.uid;
            } else {
                this.isAuth = false;
                this.userId = '';
            }
            this.isAuthChange.next(this.isAuth);
        });
    }

    login(email: string, password: string) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then((res) => {
            }).catch((err) => {
                throw err.message;
            });
    }

    logout() {
        this.afAuth.auth.signOut().then(() => {
        });
    }
}
