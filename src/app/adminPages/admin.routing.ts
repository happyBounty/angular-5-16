import { Routes } from '@angular/router';

import { AdminDashboardlComponent } from './Dashboard/AdminDashboard.component';
import { MessagesComponent } from './Messages/Messages.component';
import { BookingsComponent } from './Bookings/Bookings.component';
import { ReviewsComponent } from './Reviews/Reviews.component';
import { BookmarksComponent } from './Bookmarks/Bookmarks.component';
import { ListComponent } from './List/List.component';
import { AddListComponent } from './AddList/AddList.component';
import { ProfileComponent } from './Profile/Profile.component';

export const AdminRoutes: Routes = [{
  path: 'dashboard',
  component: AdminDashboardlComponent
},
{
  path: 'messages',
  component: MessagesComponent
},
{
  path: 'bookings',
  component: BookingsComponent
},
{
  path: 'reviews',
  component: ReviewsComponent
},
{
  path: 'bookmarks',
  component: BookmarksComponent
},
{
  path: 'list',
  component: ListComponent
},
{
  path: 'add-list',
  component: AddListComponent
},
{
  path: 'profile',
  component: ProfileComponent
}];
