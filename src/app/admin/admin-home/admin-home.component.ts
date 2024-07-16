import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { User } from '../admin-user.model';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {
  isCreate: boolean = false;
  isPost: boolean = false;
  isManagement: boolean = false;
  user!: User;

  constructor(private router: Router,  private adminService: AdminService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
  }

  onClick = (event: string) => {
    if(event === 'create'){
      this.isPost = false;
      this.isManagement = false;
      this.isCreate = !this.isCreate
    }
    if(event === 'post'){
      this.isCreate = false;
      this.isManagement = false;
      this.isPost = !this.isPost
    }
    if(event === 'management'){
      this.isCreate = false;
      this.isPost = false;
      this.isManagement = !this.isManagement
    }
  }

  logOut = () => {
    this.router.navigate(['padmin'])
    localStorage.clear();
  }
}
