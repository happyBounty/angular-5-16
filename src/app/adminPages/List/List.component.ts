import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'admin-list',
  templateUrl: './List.component.html',
  styleUrls: ['./List.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit{

   Data : any = [
                     {
                        badge    : 'Open',
                        category : 'Eat & Drink',
                        title    : 'Cafe Bar',
                        address  : 'Wall Street, New York',
                        image    : 'assets/images/most-img-1.jpg',
                        review   : '(12 reviews)'
                     },
                     {
                        badge    : 'Coming Soon',
                        category : 'Concert',
                        title    : 'Milky Ducth',
                        address  : 'MayLand Square, LA',
                        image    : 'assets/images/most-img-2.jpg',
                        review   : '(23 reviews)'
                     },
                     {
                        badge    : 'Open',
                        category : 'Hotels',
                        title    : 'Maledy Hotels',
                        address  : '672, CreedWay, New York',
                        image    : 'assets/images/most-img-3.jpg',
                        review   : '(17 reviews)'
                     },
                     {
                        badge    : 'Open',
                        category : 'Eat & Drink',
                        title    : 'Donuts Hub',
                        address  : '56,Hihu Pora, New York',
                        image    : 'assets/images/most-img-4.jpg',
                        review   : '(31 reviews)'
                     },
                     {
                        badge    : 'Now Open',
                        category : 'Airport',
                        title    : 'NYC',
                        address  : 'Mill Dee, New York',
                        image    : 'assets/images/most-img-2.jpg',
                        review   : '(46 reviews)'
                     },
                     {
                        badge    : 'Closed',
                        category : 'Eat & Drink',
                        title    : 'Groos Day',
                        address  : '71,Rowling Street, New York',
                        image    : 'assets/images/most-img-6.jpg',
                        review   : '(15 reviews)'
                     }

                  ];

   constructor(){}

   ngOnInit(){}

   ngAfterViewInit()
   {

      
   }
}
