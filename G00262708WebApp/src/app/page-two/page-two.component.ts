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

  constructor(private info:GetInfoService) { }

   onAddPost(postForm: NgForm) {
     this.info.addPost(postForm.value.Dish, postForm.value.Ingredients,postForm.value.img).subscribe()
     console.log(postForm.value);
     postForm.resetForm();
   }

  //databaseInfo:any = [];

  ngOnInit() {
  }

}

