import { Injectable } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubFollowersService extends DataService {

  constructor(http: HttpClient) {
    super('https://api.github.com/users/sefatanam/followers', http)
  }
}
