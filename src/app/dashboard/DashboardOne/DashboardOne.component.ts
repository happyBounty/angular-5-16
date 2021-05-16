import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'dashboard-one',
  templateUrl: './DashboardOne.component.html',
  styleUrls: ['./DashboardOne.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardOneComponent implements OnInit{

	bannerTitle: string = 'Find Nearby Attractions';
	bannerDesc : string = 'Expolore top-rated attractions, activities and more';
	bannerImage: string = 'assets/images/main-search-background-01.jpg';

	popularCategoriesTitle : string = 'Popular Categories';
	popularCategoriesDesc  : string = 'Browse the most desirable categories';
	categories : any = [
								{
									title: 'Hotels',
									subTitle : '64 listings',
									image: 'assets/images/cat-img-6.jpg',
									icon:'fa-2x fa fa-bed'
								},
								{
									title: 'Shops',
									subTitle : '14 listings',
									image: 'assets/images/cat-img-5.jpg',
									icon:'fa-2x fa fa-shopping-bag'
								},
								{
									title: 'Events',
									subTitle : '67 listings',
									image: 'assets/images/cat-img-2.jpg',
									icon:'fa-2x fa fa-calendar'
								},
								{
									title: 'Fitness',
									subTitle : '27 listings',
									image: 'assets/images/cat-img-3.jpg',
									icon:'fa-2x fa fa-glass'
								},
								{
									title: 'Nightlife',
									subTitle : '22 listings',
									image: 'assets/images/cat-img-4.jpg',
									icon:'fa-2x fa fa-glass'
								},
								{
									title: 'Eat & Drink',
									subTitle : '127 listings',
									image: 'assets/images/cat-img-1.jpg',
									icon:'fa-2x fa fa-glass'
								}
							];


	mostVisitedPlacesTitle : string = 'Most Visited Places';
	mostVisitedPlacesDesc  : string = 'Discover top-rated local businesses';
	places : any = [
						{
						  badge    : 'Open',
						  category : 'Eat & Drink',
						  title    : 'Cafe Bar',
						  address  : 'Wall Street, New York',
						  image    : 'assets/images/most-img-4.jpg',
						  logo     : 'assets/images/logo-1.png',
						  review   : '(12 reviews)'
						  },
						  {
								badge    : 'Coming Soon',
								category : 'Concert',
								title    : 'Milky Ducth',
								address  : 'MayLand Square, LA',
								image    : 'assets/images/most-img-3.jpg',
								logo     : 'assets/images/logo-2.png',
								review   : '(23 reviews)'
						  },
						  {
								badge    : 'Open',
								category : 'Hotels',
								title    : 'Maledy Hotels',
								address  : '672, CreedWay, New York',
								image    : 'assets/images/most-img-2.jpg',
								logo     : 'assets/images/logo-3.png',
								review   : '(17 reviews)'
						  },
						  {
								badge    : 'Open',
								category : 'Eat & Drink',
								title    : 'Donuts Hub',
								address  : '56,Hihu Pora, New York',
								image    : 'assets/images/most-img-1.jpg',
								logo     : 'assets/images/logo-4.png',
								review   : '(31 reviews)'
						  },
						  {
								badge    : 'Now Open',
								category : 'Airport',
								title    : 'NYC',
								address  : 'Mill Dee, New York',
								image    : 'assets/images/most-img-6.jpg',
								logo     : 'assets/images/logo-1.png',
								review   : '(46 reviews)'
						  },
						  {
								badge    : 'Closed',
								category : 'Eat & Drink',
								title    : 'Groos Day',
								address  : '71,Rowling Street, New York',
								image    : 'assets/images/most-img-7.jpg',
								logo     : 'assets/images/logo-2.png',
								review   : '(15 reviews)'
						  }

						];

	servicesTitle : string = 'Plan The Vacation of Your Dreams';
	servicesDesc  : string = 'Explore some of the best tips from around the world from our partners and friends.  Discover some of the most popular listings in Sydney.';
	services   : any = [
								{
									icon : 'fa fa-search',
									title: 'Find Interesting Place',
									desc : 'Proin dapibus nisl ornare diam varius tempus. Aenean a quam luctus, finibus tellus ut, convallis eros sollicitudin turpis.'
								},
								{
									icon : 'fa fa-phone-square',
									title: 'Contact a Few Owners',
									desc : 'Maecenas pulvinar, risus in facilisis dignissim, quam nisi hendrerit nulla, id vestibulum metus nullam viverra porta purus.'
								},
								{
									icon : 'fa fa-user-plus',
									title: 'Make a Reservation',
									desc : 'Faucibus ante, in porttitor tellus blandit et. Phasellus tincidunt metus lectus sollicitudin feugiat pharetra consectetur.'
								}
							];

	teamSectionTitle : string = 'The Amazing Team';
	teamSectionDesc  : string = 'According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record maximum.';
	teamMembers : any = [
							{
								name     : 'Ryan Tompson',
								position : 'Web Developer',
								image    : 'assets/images/thumb-1.jpg'
							},
							{
								name     : 'Romina Hadid',
								position : 'Marketing Strategist',
								image    : 'assets/images/thumb-2.jpg'
							},
							{
								name     : 'Alexander Smith',
								position : 'UI/UX Designer',
								image    : 'assets/images/thumb-3.jpg'
							},
							{
								name     : 'Ethan Moore',
								position : 'Founder and CEO',
								image    : 'assets/images/thumb-4.jpg'
							}
						  
						];                  

	recentBlogTitle : string = 'Recent Blog';
	blogs : any = [
							{
								tag   : 'Tips',
								date  : '22 August 2018',
								title : 'Take a Look at Hotels for All Budgets',
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
