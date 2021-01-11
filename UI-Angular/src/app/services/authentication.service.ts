import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment'

export interface UserData {
  userId: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  permission: number;
}

export interface AuthToken {
  accessToken: string;
}

export interface TokenPayload {
  email: string;
  password: string;
  username?: string;
  firstName?: string;
  lastName?: string;
  permission?: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // Properties
  private authToken: string;

  // Constructor
  constructor(private http: HttpClient) { }

  // Public methods
  public register(user: TokenPayload): Observable<any> {
    user.permission = 1;
    let url = this.http.post(`${environment.apiURL}users/register`, user);

    const request = url.pipe(
      map((data: AuthToken) => {
        if(data.accessToken) {
          this.storeToken(data.accessToken);
        }
        return data;
      })
    );

    return request;
  }

  public login(user: TokenPayload): Observable<any> {
    let url = this.http.post(`${environment.apiURL}auth`, user);

    const request = url.pipe(
      map((data: AuthToken) => {
        if (data.accessToken) {
          this.storeToken(data.accessToken);
        }
        return data;
      })
    );

    return request;
  }

  public profile(): Observable<any> {
    let url = this.http.get(
      `${environment.apiURL}users/${this.getData().userId}`,
      {headers:{Authorization: `Bearer ${this.getToken()}`}});

    return url;
  }

  public logout(): void {
    this.authToken = '';
    window.localStorage.removeItem('reuserepo-token');
  }

  public getData(): UserData {
    const token = this.getToken();
    var payload;

    if(token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    }
    else {
      return null;
    }
  }

  public isLoggedIn(): boolean {
    let user = this.getData();
    return user ? true : false;
  }

  // Private methods
  private storeToken(token: string): void {
    localStorage.setItem('reuserepo-token', token);
    this.authToken = token;
  }

  private getToken(): string {
    if (!this.authToken) {
      this.authToken = localStorage.getItem('reuserepo-token');
    }
    return this.authToken;
  }
}
