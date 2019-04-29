import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { SignUpComponent } from './content/sign-up/sign-up.component';
import { SignInComponent } from './content/sign-in/sign-in.component';
import { ProductsComponent } from './content/products/products.component';
import { AdminProductsComponent } from './content/admin/admin-products/admin-products.component';
import { ViewOneItemComponent } from './content/products/view-one-item/view-one-item.component';
import { ViewItemListComponent } from './content/products/view-item-list/view-item-list.component';
import { AdminComponent } from './content/admin/admin.component';
import { CreateOrEditItemComponent } from './content/admin/admin-products/create-or-edit-item/create-or-edit-item.component';
import { PageNotFoundComponent } from './content/page-not-found/page-not-found.component';
import { IndexPageComponent } from './content/index-page/index-page.component';
import { ViewProfileComponent } from './content/admin/admin-profiles/view-profile/view-profile.component';
import { MyProfileComponent } from './content/profile/my-profile/my-profile.component';
import { ProfileComponent } from './content/profile/profile.component';
import { AdminProfilesComponent } from './content/admin/admin-profiles/admin-profiles.component';

const routes: Routes = [
  // {path: '', redirectTo: 'index', pathMatch: 'full'},

  // Subrouting children
  {path: '', component: ContentComponent, children: [
    {path: '', component: IndexPageComponent},
    {path: 'signup', component: SignUpComponent},
    {path: 'signin', component: SignInComponent},

    {path: 'profile', component: ProfileComponent, children: [ //canActivate: [AuthGuard],
      {path: 'myprofile', component: MyProfileComponent}
    ]},

    {path: 'products', component: ProductsComponent, children: [
      {path: ':item-id', component: ViewOneItemComponent},
      {path: '', component: ViewItemListComponent}
    ]},
  
    {path: 'admin', component: AdminComponent, children: [ //canActivate: [AuthGuard],
      {path: 'products', component: AdminProductsComponent, children: [
        {path: '', component: CreateOrEditItemComponent},
        {path: ':item-id', component: CreateOrEditItemComponent}
      ]},
      {path: 'profiles', component: AdminProfilesComponent, children: [
        {path: ':profile-id', component: ViewProfileComponent}
      ]}
    ]}
  ]},

  // Always put this last to avoid errors
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
