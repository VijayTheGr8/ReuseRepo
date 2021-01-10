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
  editMode = false;
  allowEdit = false;
  articleId = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {
    const articleId = this.activatedRoute.snapshot.params?.articleId;
    if (articleId) {
      this.http.get(`${environment.apiURL}article/${articleId}`).subscribe((article) => {
        this.article = article;
        this.allowEdit = this.article?.userId === '1' || false;
      });
    } else {
      this.article = {
        title: 'Untitled Article',
        description: 'Add Description Here! ',
        tags: [],
        userId: null
      }
      this.editMode = true;
    }
  }

  ngOnInit(): void {
  }

  defaultFilterOption = (searchValue, item) => {
    if (item && item.nzLabel && typeof (item.nzLabel) !== 'object') {
      return item.nzLabel.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
    }
    else {
      return false;
    }
  };

  save() {
    this.article.updatedAt = new Date();
    this.article.createdAt = this.article.createdAt || this.article.updatedAt;
    this.article.tags = this.article.tags.map((t) => {
      return t.name ? t : { name: t, category: 'unknown' };
    });
    if (this.article?._id) {
      this.http.put(`${environment.apiURL}article/update/${this.article._id}`, this.article).subscribe((savedArticle) => {
        this.article = savedArticle;
        this.editMode = false;
      });
    } else {
      this.http.post(`${environment.apiURL}article/create`, this.article).subscribe((savedArticle) => {
        this.article = savedArticle;
        this.editMode = false;
      });
    }
  }

}
