import { Component, OnInit } from '@angular/core';
import { GetInfoService } from '../get-info.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private info:GetInfoService) { }

  databaseInfo:any = [];
  
  //on loading the page stores all recipes in the database to an array  databaseInfo
  ngOnInit(){ 
    //this.posts = this.ps.getPosts();
    this.info.getRecipes().subscribe(data => {
    this.databaseInfo = data;
    });
    
  }

}
