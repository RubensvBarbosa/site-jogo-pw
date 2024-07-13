import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {
  isCreate: boolean = false;
  isPost: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onClick = (event: string) => {
    if(event === 'create'){
      this.isPost = false;
      this.isCreate = !this.isCreate
    }
    if(event === 'post'){
      this.isCreate = false;
      this.isPost = !this.isPost
    }
  }

}
