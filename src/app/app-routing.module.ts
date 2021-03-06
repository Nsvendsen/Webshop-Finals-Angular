import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { SignUpComponent } from './content/sign-up/sign-up.component';
import { SignInComponent } from './content/sign-in/sign-in.component';
import { ProductsComponent } from './content/products/products.component';
import { AdminProductsComponent } from './content/admin/admin-products/admin-products.component';
import { AdminComponent } from './content/admin/admin.component';
import { PageNotFoundComponent } from './content/page-not-found/page-not-found.component';
import { IndexPageComponent } from './content/index-page/index-page.component';
import { MyProfileComponent } from './content/profile/my-profile/my-profile.component';
import { ProfileComponent } from './content/profile/profile.component';
import { AdminProfilesComponent } from './content/admin/admin-profiles/admin-profiles.component';
import { CreateOrEditProfileComponent } from './content/admin/admin-profiles/create-or-edit-profile/create-or-edit-profile.component';
import { AdminViewProfileListComponent } from './content/admin/admin-profiles/admin-view-profile-list/admin-view-profile-list.component';
import { CreateOrEditProductComponent } from './content/admin/admin-products/create-or-edit-product/create-or-edit-product.component';
import { AdminViewProductListComponent } from './content/admin/admin-products/admin-view-product-list/admin-view-product-list.component';
import { ViewOneProductComponent } from './content/products/view-one-product/view-one-product.component';
import { ViewProductListComponent } from './content/products/view-product-list/view-product-list.component';
import { AdminProductVariationsComponent } from './content/admin/admin-products/admin-product-variations/admin-product-variations.component';
import { AdminViewProductVariationsComponent } from './content/admin/admin-products/admin-product-variations/admin-view-product-variations/admin-view-product-variations.component';
import { CreateOrEditProductVariationComponent } from './content/admin/admin-products/admin-product-variations/create-or-edit-product-variation/create-or-edit-product-variation.component';
import { BasketComponent } from './content/basket/basket.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminOrdersComponent } from './content/admin/admin-orders/admin-orders.component';
import { AdminViewOrderListComponent } from './content/admin/admin-orders/admin-view-order-list/admin-view-order-list.component';
import { BasketCheckoutComponent } from './content/basket-checkout/basket-checkout.component';
import { StepOnePaymentInfoComponent } from './content/basket-checkout/step-one-payment-info/step-one-payment-info.component';
import { MyOrdersComponent } from './content/profile/my-orders/my-orders.component';
import { StepTwoFinalizeComponent } from './content/basket-checkout/step-two-finalize/step-two-finalize.component';
import { MyOrdersViewOneComponent } from './content/profile/my-orders-view-one/my-orders-view-one.component';

const routes: Routes = [
  // Subrouting children
  {path: '', component: ContentComponent, children: [
    // {path: '', component: IndexPageComponent},
    {path: 'signup', component: SignUpComponent},
    {path: 'signin', component: SignInComponent},

    {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard], children: [ 
      {path: 'myprofile', component: MyProfileComponent},
      {path: 'myorders', component: MyOrdersComponent},
      {path: 'myorders/:order-id', component: MyOrdersViewOneComponent}
    ]},

    {path: 'basket', component: BasketComponent},

    {path: 'checkout', component: BasketCheckoutComponent, canActivate: [AuthGuard]}, 

    {path: '', component: ViewProductListComponent}, //Current index page

    {path: 'products', component: ProductsComponent, children: [
      {path: ':product-id', component: ViewOneProductComponent},
      {path: '', component: ViewProductListComponent}
    ]},
  
    {path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: { expectedRole: 'admin'}, children: [ 
      {path: 'products', component: AdminProductsComponent, children: [
        {path: 'new', component: CreateOrEditProductComponent},
        {path: 'edit/:product-id', component: CreateOrEditProductComponent}, 
        {path: 'list', component: AdminViewProductListComponent},
        {path: 'variations', component: AdminProductVariationsComponent, children: [
          {path: ':product-id', component: AdminViewProductVariationsComponent},
          {path: 'new', component: CreateOrEditProductVariationComponent}
        ]}
      ]},
      {path: 'profiles', component: AdminProfilesComponent, children: [
        {path: 'new', component: CreateOrEditProfileComponent},
        {path: 'edit/:profile-id', component: CreateOrEditProfileComponent},
        {path: 'list', component: AdminViewProfileListComponent}
      ]},
      {path: 'orders', component: AdminOrdersComponent, children: [
        {path: 'list', component: AdminViewOrderListComponent}
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
