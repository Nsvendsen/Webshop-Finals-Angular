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
import { ProfileComponent } from './content/profile/profile.component';
import { SignInComponent } from './content/sign-in/sign-in.component';
import { SignUpComponent } from './content/sign-up/sign-up.component';
import { ViewItemListComponent } from './content/products/view-item-list/view-item-list.component';
import { ViewProfileComponent } from './content/profile/view-profile/view-profile.component';
import { MyProfileComponent } from './content/profile/my-profile/my-profile.component';
import { CreateOrEditItemComponent } from './content/admin/products/create-or-edit-item/create-or-edit-item.component';
import { PageNotFoundComponent } from './content/page-not-found/page-not-found.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';

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
    ProfileComponent,
    SignInComponent,
    SignUpComponent,
    ViewItemListComponent,
    ViewProfileComponent,
    MyProfileComponent,
    CreateOrEditItemComponent,
    PageNotFoundComponent
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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
