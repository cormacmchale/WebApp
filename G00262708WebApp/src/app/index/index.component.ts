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

  constructor(private info: GetInfoService) { }
  //variable for storing the coolection/choice
  choice: string;
  databaseInfo: any = [];
  //set collection
  setChoiceSavory() {
    this.info.setChoiceSavory();
    this.ngOnInit();
  }
  setChoiceSweet() {
    this.info.setChoiceSweet();
    this.ngOnInit();
  }
  //on loading the page stores all recipes in the database to an array databaseInfo
  ngOnInit() {
    //gets choice from service
    this.choice = this.info.getChoice();
    //gets info from correct collection from database to display
    if (this.info.getChoice() == "Savory") {
      this.info.getRecipes(this.info.getChoice()).subscribe(data => { this.databaseInfo = data; });
    }
    else if (this.info.getChoice() == "Sweet") {
      this.info.getRecipes(this.info.getChoice()).subscribe(data => { this.databaseInfo = data; });
    }
  }
}

