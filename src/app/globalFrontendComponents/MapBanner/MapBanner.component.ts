import { Component, OnInit, Input, Output, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'map-banner',
  templateUrl: './MapBanner.component.html',
  styleUrls: ['./MapBanner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MapBannerComponent implements OnInit {

   /** Title for baner **/
   @Input('layout') Layout: any = 'header';

   lat : any = 40.80;
   lng : any = -73.70;

   mapScrollWheel : boolean = false;

   markers : any = [
                     {
                        lat:  40.94401669296697,
                        lng:  -74.16938781738281,
                        icon: 'assets/images/rest.png',
                        title    : 'Tom Restaurant',
                        address  : '964 School Street, New York',
                        image    : 'assets/images/most-img-1.jpg'
                     },
                     {
                        lat:  40.77055783505125,
                        lng:  -74.26002502441406,
                        icon: 'assets/images/shop.png',
                        title    : 'Sticky Band',
                        address  : 'Bishop Avenue, New York',
                        image    : 'assets/images/most-img-2.jpg'

                     },
                     {
                        lat:  40.7427837,
                        lng:  -73.11445617675781,
                        icon: 'assets/images/rest.png',
                        title    : 'Hotel Govendor',
                        address  : '778 Country Street, New York',
                        image    : 'assets/images/most-img-3.jpg'
                     },
                     {
                        lat:  40.70437865245596,
                        lng:  -73.98674011230469,
                        icon: 'assets/images/hotel.png',
                        title    : 'Burger House',
                        address  : '2726 Shinn Street, New York',
                        image    : 'assets/images/most-img-4.jpg'
                     },
                     {
                        lat:  40.641311,
                        lng:  -73.778139,
                        icon: 'assets/images/hotel.png',
                        title    : 'Burger House',
                        address  : '1512 Duncan Avenue, New York',
                        image    : 'assets/images/most-img-6.jpg'
                     },
                     {
                        lat:  41.080938,
                        lng:  -73.535957,
                        icon: 'assets/images/rest.png',
                        title    : 'Think Coffee',
                        address  : '215 Terry Lane, New York',
                        image    : 'assets/images/most-img-3.jpg'
                     },
                     {
                        lat:  41.079386,
                        lng:  -73.519478,
                        icon: 'assets/images/hotel.png',
                        title    : 'Think Coffee',
                        address  : '215 Terry Lane, New York',
                        image    : 'assets/images/most-img-2.jpg'

                     }
                  ];

   constructor(){

   }

   ngOnInit(){}

   enableDisableScroll()
   {
      this.mapScrollWheel = !this.mapScrollWheel;
   }
}
