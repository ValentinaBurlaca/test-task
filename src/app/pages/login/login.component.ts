import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {PageRoutes} from "../../page-routes";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl('user@example.com'),
    password: new FormControl('pR19osep?W4o*a0*gafe'),
  });

  constructor(private authService: AuthService, private router: Router) {
  }


  async login(): Promise<any> {

    this.authService.login(this.loginForm.value).subscribe({
      next: () => {
        this.router.navigateByUrl(PageRoutes.Home);
      }
    })
  }
}
