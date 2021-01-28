import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ RouterModule} from '@angular/router';
import { AppComponent } from './app.component';

import { WelcomeComponent } from './components/welcome/welcome.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { CrudServiceService } from './crud-service.service';
import {FormsModule} from '@angular/forms';
import { SearchingUserDetailsComponent } from './components/searching-user-details/searching-user-details.component';
import { UpdateDetailsComponent } from './components/update-details/update-details.component';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NewUserComponent,
    SearchingUserDetailsComponent,
    UpdateDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      {path:'user',component:NewUserComponent},
      {path:'search',component:SearchingUserDetailsComponent},
      {path:'user/:id',component:UpdateDetailsComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
