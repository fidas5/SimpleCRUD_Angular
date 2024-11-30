import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { UpdateArticleComponent } from './update-article/update-article.component';
import { SearchArticleComponent } from './search-article/search-article.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConnectComponent } from './connect/connect.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ArticleGuard } from './guard/article.guard';
import { ConnectHttpComponent } from './connect-http/connect-http.component';

const routes: Routes = [
  {path: "articles", component : ArticlesComponent},
{path: "add-article", component : AddArticleComponent ,canActivate:
[ArticleGuard]},
{path: "updateArticle/:id", component: UpdateArticleComponent},
{path: "searchArticle", component: SearchArticleComponent},
{path: "dashboard", component: DashboardComponent},
{path: "connect", component: ConnectComponent},
{path: "forbidden", component: ForbiddenComponent},
{path: "", redirectTo: "connect", pathMatch: "full" },
{path: "connectHttp", component: ConnectHttpComponent},]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
