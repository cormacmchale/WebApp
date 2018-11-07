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
  
   
  ngOnInit(){ 
    //this.posts = this.ps.getPosts();
    this.info.getPostsData().subscribe(data => {
    this.databaseInfo = data;
    });
    
  }

}
