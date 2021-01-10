import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {

  public article;
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {
    const articleId = this.activatedRoute.snapshot.params?.articleId;
    this.http.get(`${environment.apiURL}article/${articleId}`).subscribe((article) => {
      this.article = article;
    })
  }

  ngOnInit(): void {
  }

}
