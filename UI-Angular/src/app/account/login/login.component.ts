import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../account.component.scss']
})
export class LoginComponent implements OnInit {
  credentials: TokenPayload = {
    email: '',
    password: '',
  };

  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.auth.profile().subscribe(() => {
      this.router.navigateByUrl('/article/list');
    }, (err) => {
    });
  }

  login() {
    this.auth.login(this.credentials).subscribe((data) => {
      this.router.navigateByUrl('/article/list');
    }, (err) => {
      console.error(err);
    });
  }

  toRegister() {
    this.router.navigateByUrl('/register');
  }
}