import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'create-user',
  templateUrl: './admin-create-user.component.html',
  styleUrls: ['./admin-create-user.component.scss']
})
export class AdminCreateUserComponent implements OnInit {
  createForm!: FormGroup;
  isAdmin = false;

  constructor(private fb: FormBuilder, private adminService: AdminService) { 
    this.createForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    }); 
  }

  ngOnInit() {
  }

  onAdmin = (event: any) => {
    this.isAdmin = event.checked;
  }

  onSubmit = () => {
    const username = this.createForm.get('username')?.value;
    const password = this.createForm.get('password')?.value;
    this.createForm.reset()
    if(username && password){
      this.adminService.createUser(username, password, this.isAdmin)
    }
    this.isAdmin = false;
  }

}
