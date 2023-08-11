import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { Router, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { TestComponent } from './test/test.component';
import { FormComponent } from './form/form.component';
import { AngularCLIPipe } from './Pipes/angular-cli.pipe';
import { PostServices } from './Services/post.service';
import { NewFormComponent } from './new-form/new-form.component';
import { ThirdFormComponent } from './third-form/third-form.component';
import { SingleComponent } from './single/single.component';
import { AppRoutingModule } from './app-routing.module';
import { PostListComponent } from './post-list/post-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DescPageComponent } from './desc-page/desc-page.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    TestComponent,
    FormComponent,
    AngularCLIPipe,
    NewFormComponent,
    ThirdFormComponent,
    SingleComponent,
    PostListComponent,
    HomePageComponent,
    DescPageComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  // providers: [PostServices],
  bootstrap: [AppComponent],
})
export class AppModule {}
