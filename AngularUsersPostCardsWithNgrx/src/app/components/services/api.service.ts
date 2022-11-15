import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {map} from 'rxjs/operators';
import {User} from '../models/user';
import {Observable} from 'rxjs';
import {Post} from '../models/post';

@Injectable()
export class ApiService {
  constructor(private httpService: HttpService) {
  }

  getAllPost(): Observable<User[]> {
    return this.httpService.get('/users')
      .pipe(map(data => data as User[]));
  }
  
}
