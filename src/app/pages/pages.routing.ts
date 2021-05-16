import { Routes } from '@angular/router';

import { UserProfileComponent } from './UserProfile/UserProfile.component';
import { BookingComponent } from './Booking/Booking.component';
import { BlogListingComponent } from './Blog/BlogListing/BlogListing.component';
import { BlogDetailComponent } from './Blog/BlogDetail/BlogDetail.component';
import { AddListingComponent } from './AddListing/AddListing.component';
import { PricingComponent } from './Pricing/Pricing.component';
import { InvoiceComponent } from './Invoice/Invoice.component';
import { ContactComponent } from './Contact/Contact.component';
import { AboutComponent } from './About/About.component';

export const PagesRoutes: Routes = [{
  path: 'user-profile',
  component: UserProfileComponent
},
{
  path: 'pricing',
  component: PricingComponent
},
{
  path: 'contact-us',
  component: ContactComponent
},
{
  path: 'user-profile',
  component: UserProfileComponent
},
{
  path: 'booking',
  component: BookingComponent
},
{
  path: 'about-us',
  component: AboutComponent
},
{
  path: 'invoice',
  component: InvoiceComponent
},
{
  path: 'blog/list',
  component: BlogListingComponent
},
{
  path: 'blog/detail',
  component: BlogDetailComponent
},
{
  path: 'add-listing',
  component: AddListingComponent
}];
