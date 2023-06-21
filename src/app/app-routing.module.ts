import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProductsComponent } from './components/products/products.component';
import { ReviewComponent } from './components/review/review.component';
import { StoreComponent } from './components/store/store.component';
import { TeamComponent } from './components/team/team.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  }, {
    path: "about",
    component:AboutComponent
  }, {
    path: "blog",
    component: BlogComponent
  }, {
    path: "contact",
    component: ContactComponent
  }, {
    path: "gallery",
    component:GalleryComponent
  }, {
    path: "menu",
    component:MenuComponent
  }, {
    path:"products",
    component:ProductsComponent
  }, {
    path: "review",
    component: ReviewComponent
  }, {
    path: "store",
    component: StoreComponent
  }, {
    path: "team",
    component: TeamComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
