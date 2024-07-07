import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  loginForm!: FormGroup;
  isShowPassword: boolean = false;
  hide = true;
  clickEvent(event: MouseEvent) {
    // this.hide.set(!this.hide());
    event.stopPropagation();
  }
  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get email() {
    return this.loginForm.get('email')!;
  }

  get password() {
    return this.loginForm.get('password')!;
  }

  onSubmit = () => {
    if (this.loginForm.invalid) {
      return;
    }
    console.log('login: ',
      this.loginForm.value.email,
      this.loginForm.value.password
    );
  };

  toggleShow = () => {
    this.isShowPassword = !this.isShowPassword;
  };

}
