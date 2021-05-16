import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'user-profile',
  templateUrl: './UserProfile.component.html',
  styleUrls: ['./UserProfile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserProfileComponent implements OnInit{

   List : any = [
                     {
                        badge    : 'Now Open',
                        category : 'Eat & Drink',
                        title    : 'Tom Restaurant',
                        address  : '964 School Street, New York',
                        image    : 'assets/images/most-img-1.jpg',
                        review   : '(12 reviews)'
                     },
                     {
                        badge    : 'Now Open',
                        category : 'Events',
                        title    : 'Sticky Band',
                        address  : 'Bishop Avenue, New York',
                        image    : 'assets/images/most-img-2.jpg',
                        review   : '(23 reviews)'
                     },
                     {
                        badge    : 'Now Open',
                        category : 'Hotels',
                        title    : 'Hotel Govendor',
                        address  : '778 Country Street, New York',
                        image    : 'assets/images/most-img-3.jpg',
                        review   : '(17 reviews)'
                     }

                  ];

   constructor(){}

   ngOnInit(){}

   ngAfterViewInit()
   {
   }
}
