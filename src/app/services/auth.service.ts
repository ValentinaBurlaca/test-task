import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, map} from "rxjs";
import {ApiRoutes} from "../api-routes";
import {AuthStoreService} from "./auth-store.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string = '';

  constructor(private http: HttpClient, private authStore: AuthStoreService) {
    // @ts-ignore
    this.token = localStorage.getItem('token')
  }

  login(payload: any | FormData): Observable<any> {
    return this.http.post<any>('https://feed-api.nanoit.dev/api/login', payload).pipe(
      map((credentials: any) => {
        this.token = credentials.token;
        localStorage.setItem('token', this.token)
        return credentials;
      })
    );
  }

  fetchArticles() {
    return this.http.get<any>('https://feed-api.nanoit.dev/api/articles', {headers: {
      authorization: `Bearer ${this.token}`
      }});
  }

  logout(): Observable<void> {
    return this.http.post<void>(ApiRoutes.Logout, {}).pipe(
      map(() => {
        this.authStore.logout();
      })
    );
  }

}
