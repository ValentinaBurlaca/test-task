import { Injectable } from '@angular/core';
import {CredentialsInterface, User} from "../intefaces";
import { LocalstorageKeys } from '../ts/enum/localstorage';


@Injectable({
  providedIn: 'root'
})
export class AuthStoreService {
  token: string | null = null;
  user: User | null = null;

  constructor( ) {
    this.token = localStorage.getItem(LocalstorageKeys.AccessToken);

    const user = localStorage.getItem(LocalstorageKeys.User);
    if (user) {
      this.user = JSON.parse(user);
    }
  }

  public login(credentials: CredentialsInterface): void {
    const {  token } = credentials;
    this.setAccessToken(token);
  }

  public setAccessToken(token: string | null): void {
    this.token = token;

    if (!token) {
      localStorage.removeItem(LocalstorageKeys.AccessToken);
      return;
    }

    localStorage.setItem(LocalstorageKeys.AccessToken, token);
  }

  public logout(): void {
    this.setAccessToken(null);
  }
}
