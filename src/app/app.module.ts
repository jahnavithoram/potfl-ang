import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {  FormsModule,  ReactiveFormsModule  }  from  '@angular/forms'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Route } from '@angular/compiler/src/core';
import { RouterModule, Routes } from '@angular/router';
import { BloginComponent } from './blogin/blogin.component';
const routes: Routes = [
  { path: 'register', component:LoginComponent },
    {path: 'login', component: BloginComponent }
  
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    BloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule, ReactiveFormsModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
