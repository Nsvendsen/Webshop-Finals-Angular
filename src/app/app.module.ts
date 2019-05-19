import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { ContentComponent } from './content/content.component';
import { IndexPageComponent } from './content/index-page/index-page.component';
import { ProductsComponent } from './content/products/products.component';
import { AdminComponent } from './content/admin/admin.component';
import { ProfileComponent } from './content/profile/profile.component';
import { SignInComponent } from './content/sign-in/sign-in.component';
import { SignUpComponent } from './content/sign-up/sign-up.component';
import { MyProfileComponent } from './content/profile/my-profile/my-profile.component';
import { PageNotFoundComponent } from './content/page-not-found/page-not-found.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDividerModule} from '@angular/material/divider';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { AdminProductsComponent } from './content/admin/admin-products/admin-products.component';
import { AdminProfilesComponent } from './content/admin/admin-profiles/admin-profiles.component';
import { CreateOrEditProfileComponent } from './content/admin/admin-profiles/create-or-edit-profile/create-or-edit-profile.component';
import { AdminViewProfileListComponent } from './content/admin/admin-profiles/admin-view-profile-list/admin-view-profile-list.component';
import { NgRedux, DevToolsExtension, NgReduxModule } from '@angular-redux/store';
import { IAppState } from './store';
import { NgReduxRouter, NgReduxRouterModule } from '@angular-redux/router';
import { rootReducer } from './store';
import { CreateOrEditProductComponent } from './content/admin/admin-products/create-or-edit-product/create-or-edit-product.component';
import { AdminViewProductListComponent } from './content/admin/admin-products/admin-view-product-list/admin-view-product-list.component';
import { ProductSliderComponent } from './content/products/product-slider/product-slider.component';
import { ViewProductListComponent } from './content/products/view-product-list/view-product-list.component';
import { ViewOneProductComponent } from './content/products/view-one-product/view-one-product.component';
import { AdminProductVariationsComponent } from './content/admin/admin-products/admin-product-variations/admin-product-variations.component';
import { AdminViewProductVariationsComponent } from './content/admin/admin-products/admin-product-variations/admin-view-product-variations/admin-view-product-variations.component';
import { CreateOrEditProductVariationComponent } from './content/admin/admin-products/admin-product-variations/create-or-edit-product-variation/create-or-edit-product-variation.component';
import { CustomCurrencyFilter, YesNoBooleanFilter, GenderFilter } from './content/products/products.filter';
import { BasketComponent } from './content/basket/basket.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ContentComponent,
    IndexPageComponent,
    ProductsComponent,
    AdminComponent,
    ProfileComponent,
    SignInComponent,
    SignUpComponent,
    MyProfileComponent,
    PageNotFoundComponent,
    AdminProductsComponent,
    AdminProfilesComponent,
    CreateOrEditProfileComponent,
    AdminViewProfileListComponent,
    CreateOrEditProductComponent,
    AdminViewProductListComponent,
    ProductSliderComponent,
    ViewProductListComponent,
    ViewOneProductComponent,
    AdminProductVariationsComponent,
    AdminViewProductVariationsComponent,
    CreateOrEditProductVariationComponent,
    CustomCurrencyFilter,
    YesNoBooleanFilter,
    GenderFilter,
    BasketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    HttpClientModule,
    MatGridListModule,
    MatTableModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    NgReduxModule, NgReduxRouterModule.forRoot(),
    MatDividerModule,
    MatPaginatorModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  // Sets up redux in our application.
  constructor(private ngRedux: NgRedux<IAppState>,
    private devTool: DevToolsExtension,
    private ngReduxRouter: NgReduxRouter,) {
   
    this.ngRedux.configureStore(
      rootReducer, {});
 
      ngReduxRouter.initialize(/* args */);   
  }
}
