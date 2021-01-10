import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleDetailsComponent } from './article/article-details/article-details.component';
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
        path: ':articleId',
        component: ArticleDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
