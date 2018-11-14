import { Component, OnInit } from '@angular/core';
import { GetInfoService } from '../get-info.service';
import { Observable } from 'rxjs';
import { NgForm } from "@angular/forms";
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private info: GetInfoService) { }

  //variable to store object returned from search
  recipe: any = [];
  //variable for storing new ingredients to be sent to updat function in service
  ingredients: any = [];
  //variable for show edit
  bool: number = 0;
  //storing id to be sent back for delete/update
  updateId: string;

  setChoiceSavory() {
    if (this.info.getChoice() == "Sweet") {
      this.recipe = [];
      this.bool = 0;
    }
    this.info.setChoiceSavory();
    this.ngOnInit();
  }
  setChoiceSweet() {
    if (this.info.getChoice() == "Savory") {
      this.recipe = [];
      this.bool = 0;
    }
    this.info.setChoiceSweet();
    this.ngOnInit();
  }
  ngOnInit() { }

  search(searchWord: NgForm) {
    //get data from database through searchPost->Service->server
    this.info.searchRecipe(searchWord.value.dish, this.info.getChoice()).subscribe(data => {
      this.recipe = data;
      this.updateId = this.recipe._id;
    });
    this.ngOnInit();
    searchWord.resetForm();
  }//end search function

  delete(id) {
    //go to delete Post -> service->send Post id to server to delete post from database
    this.info.deleteRecipe(id, this.info.getChoice()).subscribe();
    //clear Array
    this.recipe = [];
    //re-load Page
    this.ngOnInit();
  }

  displayEdit() {
    //everytime this is pressed the menu for editing opens up!
    this.bool++;
  }
  updatePost(postForm: NgForm) {
    //same logic as add recipe
    console.log("Update");
    this.ingredients.push(postForm.value.One);
    this.ingredients.push(postForm.value.Two);
    this.ingredients.push(postForm.value.Three);
    this.ingredients.push(postForm.value.Four);
    this.info.updateRecipe(this.updateId, postForm.value.Dish, postForm.value.Instructions, postForm.value.img, this.ingredients, this.info.choice).subscribe();
    this.bool++;
  }
}
