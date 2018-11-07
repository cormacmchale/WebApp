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

  ngOnInit() {
    console.log(this.databaseInfo);
  }
 
  databaseInfo:any = [];

  search(searchWord: NgForm)
  {
   //console.log("So far so good");
   this.info.searchPost(searchWord.value.dish).subscribe(data=>
  {
    this.databaseInfo = data;
  });
  this.ngOnInit();
  
  }
}
