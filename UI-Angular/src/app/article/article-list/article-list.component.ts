import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  tabPosition = 'all';
  articles = [];

  constructor(
    private http: HttpClient
  ) {
    this.fetchArticles();
  }

  ngOnInit(): void {
  }

  fetchArticles() {
    const sortObj = { field: 'updatedAt', order: 'desc' };
    const listArticleQuery = this.tabPosition === 'all' ? { query: { sort: sortObj } } : { query: { userId: '1', sort: sortObj } };
    this.http.post(`${environment.apiURL}article/search`, listArticleQuery).subscribe((articles: any) => {
      this.articles = articles;
    });
  }

  delete(article, index: number) {
    this.http.delete(`${environment.apiURL}article/${article._id}`).subscribe((d) => {
      console.log(d);
      this.articles.splice(index, 1);
    })
  }

}
