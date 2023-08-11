import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ThirdFormComponent } from './third-form/third-form.component';
import { SingleComponent } from './single/single.component';
import { FormComponent } from './form/form.component';
import { NewFormComponent } from './new-form/new-form.component';
import { ThirdFormComponent } from './third-form/third-form.component';
import { PostListComponent } from './post-list/post-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DescPageComponent } from './desc-page/desc-page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'desc/:id', component: DescPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
