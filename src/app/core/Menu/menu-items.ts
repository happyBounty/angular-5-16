import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type?: string;
  children?: Menu[];
}

const MENUITEMS = [
  {
    state: 'home',
    name: 'Home',
    type: 'sub',
    children: [
      {state: 'version1', name: 'Home Version 1', type: 'link'},
      {state: 'version2', name: 'Home Version 2', type: 'link'}
    ]
  },
  {
    state: 'listing',
    name: 'Listing',
    type: 'sub',
    children: [
      {
         state: 'list', 
         name: 'List Layout', 
         type: 'sub',
         children: [
            {state: 'with-sidebar', name: 'With Sidebar', type: 'link'},
            {state: 'full-width', name: 'Full Width', type: 'link'},
            {state: 'full-width-map', name: 'Full Width + Map', type: 'link'}
          ]
      },
      {
         state: 'grid', 
         name: 'Grid Layout', 
         type: 'sub',
         children: [
            {state: 'with-sidebar', name: 'With Sidebar', type: 'link'},
            {state: 'full-width', name: 'Full Width', type: 'link'},
            {state: 'full-width-map', name: 'Full Width + Map', type: 'link'}
          ]
      },
      {
         state: 'half-map', 
         name: 'Half Screen Map', 
         type: 'sub',
         children: [
            {state: 'list', name: 'Layout 1', type: 'link'},
            {state: 'grid', name: 'Layout 2', type: 'link'}
          ]
      },
      {
         state: 'detail', 
         name: 'Detail', 
         type: 'sub',
         children: [
            {state: 'version1', name: 'Version1', type: 'link'},
            {state: 'version2', name: 'Version2', type: 'link'}
          ]
      },
    ]
  },
  {
    state: 'admin',
    name: 'User Panel',
    type: 'sub',
    children: [
      {state: 'dashboard', name: 'Dashboard', type: 'link'},
      {state: 'messages', name: 'Messages', type: 'link'},
      {state: 'bookings', name: 'Bookings', type: 'link'},
      {state: 'reviews', name: 'Reviews', type: 'link'},
      {state: 'bookmarks', name: 'Bookmarks', type: 'link'},
      {state: 'list', name: 'My Listing', type: 'link'},
      {state: 'add-list', name: 'Add List', type: 'link'},
      {state: 'profile', name: 'Profile', type: 'link'}
    ]
  },
  {
    state: 'pages',
    name: 'Pages',
    type: 'sub',
    children: [
      {state: 'pricing', name: 'Pricing', type: 'link'},
      {state: 'invoice', name: 'Invoice', type: 'link'},
      {state: 'booking', name: 'Booking', type: 'link'},
      {state: 'add-listing', name: 'Add Listing', type: 'link'},
      {state: 'user-profile', name: 'Profile', type: 'link'},
      {
         state: 'blog', 
         name: 'blog', 
         type: 'sub',
         children: [
            {state: 'list', name: 'List', type: 'link'},
            {state: 'detail', name: 'Detail', type: 'link'}
          ]
      },
      {state: 'about-us', name: 'About', type: 'link'},
      {state: 'contact-us', name: 'Contact', type: 'link'}
    ]
  },
   {
      state: 'session',
      name: 'Session',
      type: 'sub',
      children: [
         {state: 'login', name: 'Login', type: 'link'},
         {state: 'signup', name: 'Register', type: 'link'},
         {state: 'forgot-password', name: 'Forgot Password', type: 'link'},
         {state: 'coming-soon', name: 'Coming Soon', type: 'link'}
      ]
   }
];


@Injectable()
export class MenuItems {
  getAll() {
    return MENUITEMS;
  }
}
