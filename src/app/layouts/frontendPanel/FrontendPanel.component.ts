import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
declare var $ : any;

@Component({
  selector: 'app-frontend-panel',
  templateUrl: './FrontendPanel.component.html'
})
export class FrontendPanelLayoutComponent implements OnInit{

	private _router: Subscription;
	url: string;

	isFooter : boolean = true; 

	constructor(private router: Router){}

	ngOnInit(){
		this._router = this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
			this.url = event.url;
			if (this.isFixedShow()) {
				this.isFooter = true;
			}
			else
			{
				this.isFooter = false;
			}
		});
	}

	isListingPages()
	{
		if(this.url == '/listing/half-map/grid' || this.url == '/listing/half-map/list')
		{
			return true;
		}
		else
		{
			return false;
		}
	}

	isFixedShow()
	{
		if (this.url === '/listing/half-map/grid' || this.url === '/listing/half-map/list') {
			return false;
		 } else {
			return true
		 }
	}

	ngAfterViewInit(){
		 /*----------------------------------------------------*/
		/*  Back to Top
		/*----------------------------------------------------*/
		var pxShow = 600; // height on which the button will show
		var scrollSpeed = 500; // how slow / fast you want the button to scroll to top.

		$(window).scroll(function(){
		 if($(window).scrollTop() >= pxShow){
			$("#backtotop").addClass('visible');
		 } else {
			$("#backtotop").removeClass('visible');
		 }
		});

		$('#backtotop a').on('click', function(){
		 $('html, body').animate({scrollTop:0}, scrollSpeed);
		 return false;
		});
	}

	/**
	 * On window scroll add class header-fixed.
	 */
	@HostListener('window:scroll', ['$event'])
	onScrollEvent($event){
		let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
		if (scrollTop >= 200) {
			  document.querySelector('app-frontend-panel').classList.add("header-fixed");
		} else {
				document.querySelector('app-frontend-panel').classList.remove("header-fixed");
		}
	}
}
