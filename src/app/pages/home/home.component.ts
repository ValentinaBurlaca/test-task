import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Article} from "../../intefaces";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles: Article[] = [];

  step = 0;

  constructor(private articlesService: AuthService) {
  }

  ngOnInit() {
    this.getArticles();
  }


  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

 getArticles() {
    this.articlesService.fetchArticles().subscribe({
      next: (data: any) => {
        this.articles = data.articles;
      },
      error: (err) => {
        console.warn(err);
      }
    })
  }
}
