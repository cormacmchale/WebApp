import { Component, OnInit } from '@angular/core';
import { GetInfoService } from '../get-info.service';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private info:GetInfoService) { }

  databaseInfo:any = [];
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
  //on loading the page stores all recipes in the database to an array  databaseInfo
  ngOnInit()
  { 
    this.choice = this.info.getChoice();
    console.log(this.info.choice);
    //this.posts = this.ps.getPosts();
    if(this.choice=="Savory")
    {
      this.info.getRecipes(this.choice).subscribe(data =>{this.databaseInfo = data;});
    }
    else if(this.choice=="Sweet")
    {
      this.info.getRecipes(this.choice).subscribe(data =>{this.databaseInfo = data;});
    }
  }
}

