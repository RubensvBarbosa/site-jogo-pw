import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser, User } from './admin-user.model';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private user?: User;

  constructor(private http: HttpClient, private location: Location, private router: Router) { }

  public login = (username: string, password: string) => {
    const successHandler = (result: Iuser) => {
      this.updateUser(result);
      localStorage.setItem('user', JSON.stringify(this.user));
      this.navigateAfterLogin()
    }

    const login = {username: username, password: password}

    this.http.post<Iuser>('http://localhost:3305/users/login', login).subscribe(successHandler)
  }

  private updateUser = (result: Iuser) => {
    this.user = new User(result);
  }

  private navigateAfterLogin = () => {
    const path = this.location.path();
    if(!path || path === '/padmin'){
      this.router.navigate(['padmin/home'])
      return;
    }
    this.router.navigate([`${path}`])
  };

  public isAuthenticated = () => {
    return !!this.user?.username;
  }

  public getUser = (): User | undefined => {
    return this.user ? {...this.user} : undefined
  }
}
