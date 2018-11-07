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

  ngOnInit() 
  {
    //checking the array contents here
    console.log(this.databaseInfo);
  }
 
  //variable to store object returned from search
  databaseInfo:any = [];

  search(searchWord: NgForm)
  {
   //get data from database through searchPost->Service->server
   this.info.searchPost(searchWord.value.dish).subscribe(data=>
  {
    this.databaseInfo = data;
    this.ngOnInit();
  });
  }
  
  delete(id) 
  {
    //go to delete Post -> service->send Post id to server to delete post from database
    this.info.deletePost(id).subscribe();
    this.databaseInfo=[]; 
    this.ngOnInit();         
  }
}
