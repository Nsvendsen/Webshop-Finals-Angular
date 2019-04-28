import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { ContentComponent } from './content/content.component';
import { IndexPageComponent } from './content/index-page/index-page.component';
import { ItemSliderComponent } from './content/index-page/item-slider/item-slider.component';
import { ProductsComponent } from './content/products/products.component';
import { ViewOneItemComponent } from './content/products/view-one-item/view-one-item.component';
import { AdminComponent } from './content/admin/admin.component';
import { ViewOrEditItemComponent } from './content/admin/products/view-or-edit-item/view-or-edit-item.component';
import { ProfileComponent } from './content/profile/profile.component';
import { SignInComponent } from './content/sign-in/sign-in.component';
import { SignUpComponent } from './content/sign-up/sign-up.component';
import { ViewItemListComponent } from './content/products/view-item-list/view-item-list.component';
import { ViewProfileComponent } from './content/profile/view-profile/view-profile.component';
import { MyProfileComponent } from './content/profile/my-profile/my-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ContentComponent,
    IndexPageComponent,
    ItemSliderComponent,
    ProductsComponent,
    ViewOneItemComponent,
    AdminComponent,
    ViewOrEditItemComponent,
    ProfileComponent,
    SignInComponent,
    SignUpComponent,
    ViewItemListComponent,
    ViewProfileComponent,
    MyProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
