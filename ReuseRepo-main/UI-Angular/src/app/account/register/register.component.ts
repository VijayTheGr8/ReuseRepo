import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../account.component.scss']
})
export class RegisterComponent implements OnInit {
  credentials: TokenPayload = {
    email: '',
    username: '',
    password: '',
    firstName: '',
    lastName: '',
  };

  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.auth.profile().subscribe(() => {
      this.router.navigateByUrl('/article/list');
    }, (err) => {
    });
  }

  register() {
    this.auth.register(this.credentials).subscribe(() => {
      this.auth.login(this.credentials).subscribe(() => {
        this.router.navigateByUrl('/article/list');
      });
    }, (err) => {
      console.error(err);
    });
  }

  toLogin() {
    this.router.navigateByUrl('/login');
  }
}