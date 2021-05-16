import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
declare var $ : any;

@Component({
  selector: 'dashboard-two',
  templateUrl: './DashboardTwo.component.html',
  styleUrls: ['./DashboardTwo.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardTwoComponent implements OnInit{

   mostVisitedPlacesTitle : string = 'Most Visited Places';
   mostVisitedPlacesDesc  : string = 'Discover top-rated local businesses';
   places : any = [
                     {
                        badge    : 'Now Open',
                        category : 'Eat & Drink',
                        title    : 'Tom Restaurant',
                        address  : '964 School Street, New York',
                        image    : 'assets/images/most-img-1.jpg',
                        logo     : 'assets/images/logo-1.png',
                        review   : '(12 reviews)'
                     },
                     {
                        badge    : 'Now Open',
                        category : 'Events',
                        title    : 'Sticky Band',
                        address  : 'Bishop Avenue, New York',
                        image    : 'assets/images/most-img-2.jpg',
                        logo     : 'assets/images/logo-2.png',
                        review   : '(23 reviews)'
                     },
                     {
                        badge    : 'Now Open',
                        category : 'Hotels',
                        title    : 'Hotel Govendor',
                        address  : '778 Country Street, New York',
                        image    : 'assets/images/most-img-3.jpg',
                        logo     : 'assets/images/logo-3.png',
                        review   : '(17 reviews)'
                     },
                     {
                        badge    : 'Now Open',
                        category : 'Eat & Drink',
                        title    : 'Burger House',
                        address  : '2726 Shinn Street, New York',
                        image    : 'assets/images/most-img-4.jpg',
                        logo     : 'assets/images/logo-4.png',
                        review   : '(31 reviews)'
                     },
                     {
                        badge    : 'Now Open',
                        category : 'Airport',
                        title    : 'Burger House',
                        address  : '1512 Duncan Avenue, New York',
                        image    : 'assets/images/most-img-2.jpg',
                        logo     : 'assets/images/logo-1.png',
                        review   : '(46 reviews)'
                     },
                     {
                        badge    : 'Now Closed',
                        category : 'Eat & Drink',
                        title    : 'Think Coffee',
                        address  : '215 Terry Lane, New York',
                        image    : 'assets/images/most-img-6.jpg',
                        logo     : 'assets/images/logo-2.png',
                        review   : '(15 reviews)'
                     }

                  ];

   featureSectionTitle : string = 'All at one place';
   featureSectionDesc  : string = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, assumenda excepturi id molestias veniam blanditiis recusandae a';
   featureSectionImage : string = 'assets/images/most-img-7.jpg';
   features : any = [
                           {
                              icon     : 'fa fa-heart-o',
                              name     : 'Carefully crafted components'
                           },
                           {
                              icon     : 'fa fa-thumbs-o-up',
                              name     : 'Amazing page examples'
                           },
                           {
                              icon     : 'fa fa-code',
                              name     : 'Super friendly support team'
                           }
                        ];

   testimonialTitle : string = 'What Our Users Say';
   testimonialDesc  : string = 'We collect reviews from our users so you can get an honest opinion of what an experience with our website are really like!';
   testimonials : any = [
                           {
                              message  : 'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation is on the runway heading towards a streamlined cloud solution user generated content.',
                              name     : 'Jennie Smith',
                              position : 'Coffee Shop Owner',
                              image    : 'assets/images/thumb-1.jpg'
                           },
                           {
                              message  : 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop.',
                              name     : 'Tom Baker',
                              position : 'Clothing Store Owner',
                              image    : 'assets/images/thumb-2.jpg'
                           },
                           {
                              message  : 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view.',
                              name     : 'Jack Paden',
                              position : 'Restaurant Owner',
                              image    : 'assets/images/thumb-3.jpg'
                           }
                        ];

   featureGridTitle : string = 'Modern Interface';
   featureGridDesc  : string = 'The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.';
   featureGrids : any = [
                           {
                              icon : 'fa fa-envelope',
                              name : 'Awesome Support',
                              desc : 'The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.'
                           },
                           {
                              icon : 'fa fa-phone',
                              name : 'Modular Components',
                              desc : 'The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.'
                           },
                           {
                              icon : 'fa fa-envelope',
                              name : 'Awesome Support',
                              desc : 'The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.'
                           },
                           {
                              icon : 'fa fa-phone',
                              name : 'Modular Components',
                              desc : 'The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.'
                           }
                        ];

   recentBlogTitle : string = 'Recent Blog';
   blogs : any = [
                     {
                        tag   : 'Tips',
                        date  : '22 August 2018',
                        title : 'Hotels for All Budgets',
                        desc  : 'Sed sed tristique nibh iam porta volutpat finibus. Donec in aliquet urneget mattis lorem. Pellentesque pellentesque', 
                        image : 'assets/images/post-1.jpg'
                     },
                     {
                        tag   : 'Tips',
                        date  : '22 August 2018',
                        title : 'The 50 Greatest Street Arts In London',
                        desc  : 'Sed sed tristique nibh iam porta volutpat finibus. Donec in aliquet urneget mattis lorem. Pellentesque pellentesque.', 
                        image : 'assets/images/post-2.jpg'
                     },
                     {
                        tag   : 'Tips',
                        date  : '22 August 2018',
                        title : 'The Best Cofee Shops In Sydney Neighborhoods',
                        desc  : 'Sed sed tristique nibh iam porta volutpat finibus. Donec in aliquet urneget mattis lorem. Pellentesque pellentesque.', 
                        image : 'assets/images/post-3.jpg'
                     }
                  ];

   constructor(){}

   ngOnInit(){}

   ngAfterViewInit()
   {

   }
}
