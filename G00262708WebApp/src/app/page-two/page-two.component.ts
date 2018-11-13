import { Component, OnInit } from '@angular/core';
import { GetInfoService } from '../get-info.service';
import { Observable } from 'rxjs';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent implements OnInit {

  //used to store an array of ingredients to be sent to the service
  ingredients:any= [];

  constructor(private info:GetInfoService) { }
   
  choice:string = this.info.getChoice();
  setChoiceSavory()
  {
    this.info.setChoiceSavory();
    this.ngOnInit();
  }
  setChoiceSweet()
  {
    this.info.setChoiceSweet();
    this.ngOnInit();
  }
 
   addRecipe(postForm: NgForm) 
  {
    this.choice = this.info.getChoice();
    console.log(this.choice);
    this.ingredients.push(postForm.value.ingredientOne);
    this.ingredients.push(postForm.value.ingredientTwo);
    this.ingredients.push(postForm.value.ingredientThree);
    this.ingredients.push(postForm.value.ingredientFour);
    this.info.addRecipe(postForm.value.Dish, postForm.value.Instructions,postForm.value.img, this.ingredients, this.choice).subscribe();
    postForm.resetForm();
  }

  ngOnInit() {
  }

}

