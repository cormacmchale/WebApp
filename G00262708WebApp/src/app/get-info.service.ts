import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from './post.model';

@Injectable({
  providedIn: 'root'
})
export class GetInfoService {

  constructor(private http: HttpClient)  { }

  getPostsData(): Observable<any> {
    return this.http.get("http://localhost:8081/database");
  }

  addPost(title: string, comment: string): Observable<any> {
    const post: Post = {title: title, comment: comment};
    return this.http.post("http://localhost:8081/database",post);
  }

  deletePost(title: string): Observable<any>{
    return this.http.delete("http://localhost:8081/database/delete/"+title);
  }

}
