import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { User } from '../admin-user.model';

@Component({
  selector: 'post-news',
  templateUrl: './admin-post-news.component.html',
  styleUrls: ['./admin-post-news.component.scss']
})
export class AdminPostNewsComponent implements OnInit {
  createForm!: FormGroup;
  user!: User;

  constructor(private fb: FormBuilder, private adminService: AdminService) { 
    this.createForm = this.fb.group({
      titulo: ['', Validators.required],
      noticia: ['', Validators.required]
    }); 
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
  }

  onSubmit = () => {
    const titulo = this.createForm.get('titulo')?.value;
    const noticia = this.createForm.get('noticia')?.value;
    
    this.createForm.reset()
    if(titulo && noticia){
      this.adminService.createPost(titulo, noticia, this.user.username)
    }
  }

}
