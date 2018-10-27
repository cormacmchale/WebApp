import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from "@angular/forms";
import { IndexComponent } from './index/index.component';
import {GetInfoService} from './get-info.service';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//for viewing pleasure
import { MatInputModule,
         MatMenuModule,
         MatCardModule,
         MatButtonModule,
         MatIconModule,
         MatToolbarModule,
         MatExpansionModule} from '@angular/material';

//components
import { AppComponent } from './app.component';
import { PageTwoComponent } from './page-two/page-two.component';

const appRoutes: Routes = [
  {
  path: 'index', component: IndexComponent,
  },
  {
  path: 'pageTwo', component: PageTwoComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PageTwoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatMenuModule,
    FormsModule    
  ],
  providers: [GetInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
