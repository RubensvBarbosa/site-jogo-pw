import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'post-news',
  templateUrl: './admin-post-news.component.html',
  styleUrls: ['./admin-post-news.component.scss']
})
export class AdminPostNewsComponent implements OnInit {
  createForm!: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.createForm = this.fb.group({
      titulo: ['', Validators.required],
      noticia: ['', Validators.required]
    }); 
  }

  ngOnInit() {
  }

  onSubmit = () => {
    console.log('Criar');
  }

}
