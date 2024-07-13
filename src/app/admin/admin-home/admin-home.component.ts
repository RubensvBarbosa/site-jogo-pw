import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {
  isCreate: boolean = false;
  isPost: boolean = false;
  isManagement: boolean = false;

  constructor() { }

  ngOnInit() {
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

}
