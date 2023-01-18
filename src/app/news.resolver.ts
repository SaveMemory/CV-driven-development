import { NewsService } from './news.service';
import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsResolver implements Resolve<Observable<string>> {

  constructor(private newsService: NewsService) {}

  resolve(): Observable<any> {
    return this.newsService.getTopPosts().pipe(catchError(()=>{
      return of('data not available');
    }));
  }
}
