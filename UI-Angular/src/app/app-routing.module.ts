import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleDetailsComponent } from './article/article-details/article-details.component';
import { ArticleListComponent } from './article/article-list/article-list.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'article/search',
    pathMatch: "full"
  },
  {
    path: 'article',
    children: [
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: 'create',
        component: ArticleDetailsComponent
      },
      {
        path: 'list',
        component: ArticleListComponent
      },
      {
        path: ':articleId',
        component: ArticleDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
