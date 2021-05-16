import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

import { UserProfileComponent } from './UserProfile/UserProfile.component';
import { BookingComponent } from './Booking/Booking.component';
import { BlogListingComponent } from './Blog/BlogListing/BlogListing.component';
import { BlogDetailComponent } from './Blog/BlogDetail/BlogDetail.component';
import { AddListingComponent } from './AddListing/AddListing.component';

import { PricingComponent } from './Pricing/Pricing.component';
import { InvoiceComponent } from './Invoice/Invoice.component';
import { ContactComponent } from './Contact/Contact.component';
import { AboutComponent } from './About/About.component';

import { GlobalModule } from '../globalFrontendComponents/global.module';

import { PagesRoutes } from './pages.routing';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
   // Change this to your upload POST address:
    url: 'https://httpbin.org/post',
    maxFilesize: 50,
    acceptedFiles: 'image/*'
  };


@NgModule({
  imports: [
    CommonModule,
    GlobalModule,
    DropzoneModule,
    RouterModule.forChild(PagesRoutes),
  ],
  declarations: [ 
   PricingComponent,
   InvoiceComponent,
   ContactComponent,
   AboutComponent,
    UserProfileComponent,
    BookingComponent,
    BlogListingComponent,
    BlogDetailComponent,
    AddListingComponent
  ],
  providers: [
   {
     provide: DROPZONE_CONFIG,
     useValue: DEFAULT_DROPZONE_CONFIG
   }
 ]
})

export class PagesModule {}
