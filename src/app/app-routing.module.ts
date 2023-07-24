import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SinglePostsComponent } from './pages/single-posts/single-posts.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';

const routes: Routes = [
  {path:'' ,component: HomeComponent},
  {path:'post', component:SinglePostsComponent},
  {path:'category', component:SingleCategoryComponent},
  {path:'about', component:AboutUsComponent},
  {path:'contact', component:ContactUsComponent},
  {path:'terms-conditions', component:TermsAndConditionsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
