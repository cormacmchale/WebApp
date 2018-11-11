import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Recipe} from './post.model';


@Injectable({
  providedIn: 'root'
})
export class GetInfoService {

  constructor(private http: HttpClient)  { }

  //returns all documents from the database
  getRecipes(): Observable<any> {
    return this.http.get("http://localhost:8081/database/test");
  }
  //sends recipe to sever.js
  addRecipe(Dish: string, Instructions: string, img:string, Ingredients:Array<string>): Observable<any> {
    const recipe: Recipe = {Dish: Dish, Instructions: Instructions, img:img, Ingredients:Ingredients};
    return this.http.post("http://localhost:8081/database/test",recipe);
  }
  //send the id to the database of document you wish to delete to server js
  deleteRecipe(id: string): Observable<any>{
    return this.http.delete("http://localhost:8081/database/delete/"+id);
  }
  //searches for a returns a document based on the dish name
  searchRecipe(Dish: string): Observable<any>
  {
    console.log(Dish);
    return this.http.get("http://localhost:8081/database/search/"+Dish);
  }
  //sends id and new info to the server to find and updat a recipe
  updateRecipe(id: string,Dish: string, Instructions: string, img:string, Ingredients:Array<string>): Observable<any> 
  {
    const recipe: Recipe = {Dish: Dish, Instructions: Instructions, img:img, Ingredients:Ingredients};  
    return this.http.put("http://localhost:8081/database/update/"+id, recipe);
  }
}
