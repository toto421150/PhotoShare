import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadImagesComponent } from './upload-images/upload-images.component';
import { DiapoComponent } from './diapo/diapo.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PhotosListComponent } from './photos-list/photos-list.component';
//Routing gérant les différentes pages
const routes: Routes =[
  {path: 'home',component:LoginPageComponent},
  {path: 'photos',component:PhotosListComponent},
  {path: 'diapo',component:DiapoComponent},
  {path: '',redirectTo:'/home',pathMatch:'full'},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
