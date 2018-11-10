import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from './post.model';
import {PostTwo} from './post.model';

@Injectable({
  providedIn: 'root'
})
export class GetInfoService {

  constructor(private http: HttpClient)  { }

  //returns all documents from the database
  getPostsData(): Observable<any> {
    return this.http.get("http://localhost:8081/database/test");
  }
  //takes in the post object, sends information to create doocumnet in the database
  addPost(Dish: string, Ingredients: string, img:string): Observable<any> {
    const post: Post = {Dish: Dish, Ingredients: Ingredients, img:img};
    return this.http.post("http://localhost:8081/database",post);
  }

  //testing at the moment
  addPostTest(Dish: string, Ingredients: string, img:string, list:Array<string>): Observable<any> {
    const postTwo: PostTwo = {Dish: Dish, Ingredients: Ingredients, img:img, list:list};
    console.log(postTwo);
    return this.http.post("http://localhost:8081/database/test",postTwo);
  }





  //send the id to the database of document you wish to delete
  deletePost(id: string): Observable<any>{
    return this.http.delete("http://localhost:8081/database/delete/"+id);
  }
  //searches for a returns a document based on the dish name
  searchPost(Dish: string): Observable<any>
  {
    return this.http.get("http://localhost:8081/database/search/"+Dish);
  }

  updatePost(id: string, Dish: string, Ingredients: string, img: string): Observable<any> {
    const post: Post = {Dish: Dish, Ingredients: Ingredients, img:img};
    console.log(id);
    console.log(post);    
    return this.http.put("http://localhost:8081/database/update/"+id, post);
    }

}
