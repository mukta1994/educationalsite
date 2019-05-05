import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatInputModule,MatFormFieldModule,MatRadioModule,MatCheckboxModule    } from '@angular/material';
import {MatRippleModule} from '@angular/material'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { FilterPipe} from './filter.pipe';
import { HomeComponent } from './takeTest/takeTest.component';
import { ToastrModule } from 'ngx-toastr';
import {Routes,RouterModule} from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CurrentaffairsComponent } from './currentaffairs/currentaffairs.component';



const ROUTES:Routes=[{
    path:'', component:HomePageComponent
  },
  {
  path:'takeTest', component:HomeComponent
},

{
  path:'currentaffairs/:id', component:CurrentaffairsComponent
}]

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe ,
    MyComponentComponent,
    HomeComponent,
    HomePageComponent,
    CurrentaffairsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule ,
    MatCheckboxModule ,
    MatRadioModule ,
    BrowserAnimationsModule,
    FormsModule,MatRippleModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

