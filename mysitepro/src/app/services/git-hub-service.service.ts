import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class GitHubService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('https://api.github.com/users/12jikan/repos')
  }

  getUserData() {
    return this.http.get('https://api.github.com/users/12jikan')
  }
}
