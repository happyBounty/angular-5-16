import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'list-full-width',
  templateUrl: './ListFullWidth.component.html',
  styleUrls: ['./ListFullWidth.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListFullWidthComponent implements OnInit{

   Data : any = [
                     {
                        badge    : 'Now Open',
                        category : 'Eat & Drink',
                        title    : 'Tom Restaurant',
                        address  : '964 School Street, New York',
                        image    : 'assets/images/most-img-1.jpg',
                        rating   : '5',
                        review   : '(12 reviews)'
                     },
                     {
                        badge    : 'Now Open',
                        category : 'Events',
                        title    : 'Sticky Band',
                        address  : 'Bishop Avenue, New York',
                        image    : 'assets/images/most-img-2.jpg',
                        rating   : '5',
                        review   : '(23 reviews)'
                     },
                     {
                        badge    : 'Now Open',
                        category : 'Hotels',
                        title    : 'Hotel Govendor',
                        address  : '778 Country Street, New York',
                        image    : 'assets/images/most-img-3.jpg',
                        rating   : '5',
                        review   : '(17 reviews)'
                     },
                     {
                        badge    : 'Now Open',
                        category : 'Eat & Drink',
                        title    : 'Burger House',
                        address  : '2726 Shinn Street, New York',
                        image    : 'assets/images/most-img-4.jpg',
                        rating   : '5',
                        review   : '(31 reviews)'
                     },
                     {
                        badge    : 'Now Open',
                        category : 'Airport',
                        title    : 'Burger House',
                        address  : '1512 Duncan Avenue, New York',
                        image    : 'assets/images/most-img-2.jpg',
                        rating   : '5',
                        review   : '(46 reviews)'
                     },
                     {
                        badge    : 'Now Closed',
                        category : 'Eat & Drink',
                        title    : 'Think Coffee',
                        address  : '215 Terry Lane, New York',
                        image    : 'assets/images/most-img-6.jpg',
                        rating   : '5',
                        review   : '(15 reviews)'
                     }

                  ];

   constructor(){}

   ngOnInit(){}

   ngAfterViewInit()
   {

   }
}
