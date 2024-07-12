import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'create-user',
  templateUrl: './admin-create-user.component.html',
  styleUrls: ['./admin-create-user.component.scss']
})
export class AdminCreateUserComponent implements OnInit {
  createForm!: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.createForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    
  }

  ngOnInit() {
  }

  onSubmit = () => {
    console.log('Criar');
  }

}
