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

  /*
    fetch articles based on user's preference either "all" or "my articles"
    articles will be sorted by "DESC" by the field "updatedAt"
  */

  fetchArticles() {
    const sortObj = { field: 'updatedAt', order: 'desc' };
    const listArticleQuery = this.tabPosition === 'all' ? { query: { sort: sortObj } } : { query: { userId: '1', sort: sortObj } };
    this.http.post(`${environment.apiURL}article/search`, listArticleQuery).subscribe((articles: any) => {
      this.articles = articles;
    });
  }


  /**
   * 
   * @param article - article tobe deleted 
   * @param index - index of the article to be deleted
   */
  delete(article, index: number) {
    this.http.delete(`${environment.apiURL}article/${article._id}`).subscribe((d) => {
      console.log(d);
      /** Upon successful delete operation from the backend remove aarticle from the list */
      this.articles.splice(index, 1);
    })
  }

}
