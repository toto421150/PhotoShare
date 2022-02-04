import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DiapoComponent } from './diapo/diapo.component';
import { PhotosListComponent } from './photos-list/photos-list.component';

import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatListModule } from '@angular/material/list';

import { FilterPipe } from './filter.pipe';
import { UploadImagesComponent } from './components/upload-images/upload-images.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginPageComponent,
    DiapoComponent,
    PhotosListComponent,
    FilterPipe,
    UploadImagesComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatListModule,
    FormsModule,
    LightboxModule,
    GalleryModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
