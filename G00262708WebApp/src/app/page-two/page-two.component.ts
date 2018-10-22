import { Component, OnInit } from '@angular/core';
import { GetInfoService } from '../get-info.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent implements OnInit {

  constructor(private info:GetInfoService) { }

  databaseInfo:any = [];

  ngOnInit() {
  }

}