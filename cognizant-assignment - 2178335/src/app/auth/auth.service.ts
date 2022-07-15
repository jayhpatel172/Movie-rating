import { Inject, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { AuthData } from "./auth-data.model";
import { User } from "./user.model";

@Injectable()
export class AuthService {
    authChange = new Subject<boolean>();
    private user: User;
    
    constructor(private router: Router) {}
    

    registerUser(authData: AuthData) {
        this.user = {
            email: authData.email
        };
        this.authSuccess();
        
    }

    login(authData: AuthData) {
        this.user = {
            email: authData.email
        }
        this.authSuccess();
    }

    logout() {
        this.user == null;
        this.authChange.next(false);
        this.router.navigate(['/login']);
        this.authChange.next(false);
    }

    getUser() {
        return { ...this.user };
    }

    isAuth() {
        return this.user != null;
    }

    private authSuccess() {
        this.authChange.next(true);
        this.router.navigate(['/movies-list']);
        this.authChange.next(true);
    }
}