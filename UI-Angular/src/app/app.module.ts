import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// antd components module
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { AntdModule } from 'src/app/antd.module';
import { SearchComponent } from './search/search.component';
import { ArticleListComponent } from './article/article-list/article-list.component';
import { LoginRegisterComponent } from './login-register/login-register.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ArticleListComponent,
    LoginRegisterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AntdModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule { }
