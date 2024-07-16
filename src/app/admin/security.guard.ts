import { Injectable } from '@angular/core';
import { AdminService } from './admin.service';
import { Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class SecurityGuard {

  constructor(private adminService: AdminService, private router: Router) { }

  canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.adminService.isAuthenticated()){
      return true;
    }else {
      this.router.navigate(['padmin'])
      return false;
    }
  }

}
