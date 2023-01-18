import { NewsService } from './news.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<any> {

  constructor(private newsService: NewsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.newsService.getPost(route.params.get('id'));
  }
}
