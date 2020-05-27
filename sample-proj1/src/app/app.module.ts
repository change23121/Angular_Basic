import { PhonePipe } from './Batch3/phones.pipes';
import { ProductDetailsComponent } from './Batch3/productdetails.component';
import { ContactsComponent } from './Batch3/contacts.component';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './Batch3/menu.component';
import { PhotosComponent } from './Batch3/photos.component';
import { SignUpFormComponent } from './Batch2-formValidation/signupform.component';
import { ProfileComponent } from './Batch1/profile.component';
import { LoginComponent } from './Batch1/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductsComponent } from './products/products.component';

import { FormsModule} from '@angular/forms'     //typescript import
import { HeaderComponent } from './Batch1/header.component';
import { HttpClientModule} from '@angular/common/http'

// Login', 'Photos', 'Products', 'Profile', 'UserForm', 'Contacts

//Routes is an interface
let routes: Routes=[
    {
      path:'',
      component: WelcomeComponent
    },
    {
      path:'login',
      component: LoginComponent
    },
    {
      path:'photos',
      component: PhotosComponent
    },
    {
      path:'products',
      component: ProductsComponent,
      children:[
        {
          // /:id is root parameter 
        path: 'productdetails/:id',
        component: ProductDetailsComponent,
        } 
      ]
    },
    {
      path:'profile',
      component: ProfileComponent
    },
    {
      path:'signupform',
      component: SignUpFormComponent
    },
    {
      path:'contacts',
      component: ContactsComponent
    },
]
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductsComponent,
    LoginComponent,
    HeaderComponent,
    ProfileComponent,
    SignUpFormComponent,
    PhotosComponent,
    MenuComponent,
    ProductDetailsComponent,
    PhonePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,   //angular imports array
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
