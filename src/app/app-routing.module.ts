import { NewsResolver } from './resolvers/news.resolver';
import { TopComponent } from './top/top.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';
import { PostResolver } from './resolvers/post.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'top',
    component: TopComponent,
    resolve: { message: NewsResolver }
  },
  {
    path: 'post/:id',
    component: PostComponent,
    resolve: { newsData: PostResolver }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
