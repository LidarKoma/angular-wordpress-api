import { BrowserModule } from '@angular/platform-browser';
import { NgModule,enableProdMode} from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { CategoriesComponent } from './categories/categories.component';
import { PostbycComponent } from './postbyc/postbyc.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SliderComponent } from './slider/slider.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';

import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import 'hammerjs';
import 'mousetrap';
import { ModalGalleryModule } from '@ks89/angular-modal-gallery';
import { GalleryComponent } from './gallery/gallery.component';
import { Gallery2Component } from './gallery2/gallery2.component';
import {NgxImageGalleryModule} from "ngx-image-gallery";
import {
  MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatListModule,
  MatToolbarModule
} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import { KeysPipe } from './pipe/KeysPipe';

//important for light box

import { LightboxModule } from 'ngx-lightbox';
import { NgxGalleryModule } from 'ngx-gallery';
import { PreloadAllModules } from '@angular/router';
import { PostslarComponent } from './postslar/postslar.component';
import { PostlarComponent } from './postlar/postlar.component';
import { FooterComponent } from './footer/footer.component';
import { WorkbyservicesComponent } from './workbyservices/workbyservices.component';
import { WorkdetailComponent } from './workdetail/workdetail.component';
import { NgwWowModule } from 'ngx-wow';
import { PagesComponent } from './pages/pages.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ServicesComponent } from './services/services.component';




const appRoutes: Routes = [
  { path: '', component: PostsComponent, pathMatch: 'full' },
  {
    path: 'pages', component: PagesComponent, 
    
    children: [
      {path: '', redirectTo: 'page1', pathMatch: 'full'},
      
  { path: 'page1/:id', component: Page1Component },
  
  { path: 'page2/:id', component: Page2Component },
  { path: 'page3', component: Page3Component }]
  },

  {
    path: 'post/:id',
    component: PostComponent,
    data: { title: 'item Edit' }
  },
  {
    path: 'postslar',
    component:PostslarComponent,
    data: { title: 'postlar' }
  },
  {
  path: 'book/:id',
    component: PostlarComponent,
    data: { title: 'postlar' }
  },

  
  {
    path: 'contact',
    component:ContactComponent,
    data: { title: 'contact' }
  },
  {
    path: 'cg',
    component: CategoriesComponent,
    data: { title: 'cg' }
  },
  {
    path: 'postsByc/:id',
    component: PostbycComponent,
    data: { title: 'postscg' }
  },
  {
    path: 'service/:id/:name.html',
    component:ServicesComponent,
    data: { title: 'services' }
  },
  {
    path: 'work/:id/:name.html',
    component:WorkbyservicesComponent,
    data: { title: 'Workbyservices' }
  },
  {
    path: 'workdetail/:id',
    component:WorkdetailComponent,
    data: { title: 'Workdetail' }
  },
  {path: '**', component: PostsComponent}
  //I have to make 404 component{path: '**', component: '404'}
  
];


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostsComponent,
    CategoriesComponent,
    PostbycComponent,
    SliderComponent,
    NavbarComponent,
    ContactComponent,
    GalleryComponent,
    Gallery2Component,
    KeysPipe,
    PostslarComponent,
    PostlarComponent,
    FooterComponent,
    WorkbyservicesComponent,
    WorkdetailComponent,
    PagesComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    ServicesComponent,
    
  ],
  imports: [
    
   
    RouterModule.forRoot(
      appRoutes,
      {
        preloadingStrategy: PreloadAllModules
      }, 
      //{ enableTracing: true } // <-- debugging purposes only
    ),
    NgbModule.forRoot(),
    ModalGalleryModule.forRoot(),
    NgwWowModule.forRoot(),
    FlexLayoutModule,

    BrowserModule,
    BrowserAnimationsModule,
   
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    //FlexModule,
    

    BrowserModule,
    NgxImageGalleryModule,
    FlexLayoutModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,

    //
    LightboxModule,

    //
    NgxGalleryModule,
    MatTabsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
