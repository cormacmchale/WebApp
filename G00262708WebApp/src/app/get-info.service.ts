import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from './post.model';


@Injectable({
  providedIn: 'root'
})
export class GetInfoService {
  //variable for choosing corrct collection based on user input
  choice: string;
  //functions to change this
  setChoiceSavory() {
    this.choice = "Savory";
  }
  setChoiceSweet() {
    this.choice = "Sweet";
  }
  //function for returning the current choice to user
  getChoice(): string {
    return this.choice;
  }
  constructor(private http: HttpClient) { }
  //returns all documents from the database
  getRecipes(choice: string): Observable<any> {
    return this.http.get("http://46.101.213.83/:8081/database/test/" + choice);
  }
  //sends recipe to sever.js
  addRecipe(Dish: string, Instructions: string, img: string, Ingredients: Array<string>, choice: string): Observable<any> {
    const recipe: Recipe = { Dish: Dish, Instructions: Instructions, img: img, Ingredients: Ingredients };
    return this.http.post("http://46.101.213.83/:8081/database/test/" + choice, recipe);
  }
  //send the id to the database of document you wish to delete to server js
  deleteRecipe(id: string, choice: string): Observable<any> {
    return this.http.delete("http://46.101.213.83/:8081/database/delete/" + choice + id);
  }
  //searches for a returns a document based on the dish name
  searchRecipe(Dish: string, choice: string): Observable<any> {
    return this.http.get("http://46.101.213.83/:8081/database/search/" + choice + Dish);
  }
  //sends id and new info to the server to find and updat a recipe
  updateRecipe(id: string, Dish: string, Instructions: string, img: string, Ingredients: Array<string>, choice: string): Observable<any> {
    const recipe: Recipe = { Dish: Dish, Instructions: Instructions, img: img, Ingredients: Ingredients };
    return this.http.put("http://46.101.213.83/:8081/database/update/" + choice + id, recipe);
  }
}
