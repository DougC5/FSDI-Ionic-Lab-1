import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public posts = [];

  constructor() { }

  addPost(post: any) {
    this.posts.push(post);
  }

  getAllPosts() {
    return this.posts;
  }
}
