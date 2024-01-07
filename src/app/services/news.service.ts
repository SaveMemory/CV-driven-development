import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private endpointBase: string = 'https://hacker-news.firebaseio.com/v0/';

  constructor(private http: HttpClient) { }

  getTopPosts() {
    const endpoint = 'topstories.json';

    return this.http.get(`${this.endpointBase}${endpoint}`);
  }

  getPost(postId: string) {
    const endpoint = 'item';

    return this.http.get(`${this.endpointBase}${endpoint}/${postId}.json`);
  }
}
