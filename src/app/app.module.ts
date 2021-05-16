import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { AdminPanelLayoutComponent } from './layouts/adminPanel/AdminPanelLayout.component';
import { FrontendPanelLayoutComponent } from './layouts/frontendPanel/FrontendPanel.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

import { HeaderComponent } from './core/Header/Header.component';
import { FooterComponent } from './core/Footer/Footer.component';
import { MenuComponent } from './core/Menu/Menu.component';
import { SignInComponent } from './core/SignInPopup/SignIn.component';

import { AdminHeaderComponent } from './core/AdminHeader/AdminHeader.component';
import { AdminSidebarComponent } from './core/AdminSidebar/AdminSidebar.component';

import { MenuItems } from './core/Menu/menu-items';
import { AdminMenuItems } from './core/AdminHeader/admin-menu-items';
import { My_homepageComponent } from './my_homepage/my_homepage.component';


const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
   // Change this to your upload POST address:
    url: 'https://httpbin.org/post',
    maxFilesize: 50,
    acceptedFiles: 'image/*'
  };

@NgModule({
  declarations: [		
      AppComponent,
      AdminPanelLayoutComponent,
      FrontendPanelLayoutComponent,
      AuthLayoutComponent,

      HeaderComponent,
      FooterComponent,
      MenuComponent,
      SignInComponent,

      AdminHeaderComponent,
      AdminSidebarComponent,
      My_homepageComponent
   ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      DropzoneModule,
      RouterModule.forRoot(AppRoutes, {scrollPositionRestoration: 'enabled'}),
      HttpClientModule
  ],
  providers: [
      MenuItems, 
      AdminMenuItems,
      {
        provide: DROPZONE_CONFIG,
        useValue: DEFAULT_DROPZONE_CONFIG
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
