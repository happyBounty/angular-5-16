import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'admin-bookmarks',
  templateUrl: './Bookmarks.component.html',
  styleUrls: ['./Bookmarks.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BookmarksComponent implements OnInit{

   Data : any = [
                  {
                     image: 'assets/images/dp-1.jpg',
                     title: 'Sticky Band',
                     address: 'Bishop Avenue, New York',
                     review: '(23 reviews)'
                  },
                  {
                     image: 'assets/images/dp-2.jpg',
                     title: 'Burger House',
                     address: '2726 Shinn Street, New York',
                     review: '(31 reviews)'
                  },
                  {
                     image: 'assets/images/dp-3.jpg',
                     title: 'Think Coffee',
                     address: '215 Terry Lane, New York',
                     review: '(23 reviews)'
                  },
                   {
                     image: 'assets/images/dp-4.jpg',
                     title: 'Koenna Brew',
                     address: '3 Jane Lane, New York',
                     review: '(8.7k reviews)'
                  }
               ];

   constructor(){}

   ngOnInit(){}

   ngAfterViewInit()
   {

      
   }
}
