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


  ingredients:any= [];

  constructor(private info:GetInfoService) { }
   
   onAddPost(postForm: NgForm) {
     this.info.addPost(postForm.value.Dish, postForm.value.Ingredients,postForm.value.img).subscribe()
     console.log(postForm.value);
     postForm.resetForm();
   }

   onAddPostTest(postForm: NgForm) {
    this.ingredients.push(postForm.value.One);
    this.ingredients.push(postForm.value.Two);
    this.ingredients.push(postForm.value.Three);
    this.ingredients.push(postForm.value.Four);
    console.log(this.ingredients);
    this.info.addPostTest(postForm.value.Dish, postForm.value.Ingredients,postForm.value.img, this.ingredients).subscribe()
    console.log(postForm.value);
    postForm.resetForm();
  }

  ngOnInit() {
  }

}

